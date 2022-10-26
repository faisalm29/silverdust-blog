import type { NextApiRequest, NextApiResponse } from "next";
import queryString from "query-string";

const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_PUBLIC_SPOTIFY_REDIRECT_URI: redirect_uri,
  NEXT_PUBLIC_SPOTIFY_CODE: code,
} = process.env;

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: queryString.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri,
    }),
  });

  try {
    const data = await response.json();
    res.send(data);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};

import React from "react";
import useSWR from "swr";
import Image from "next/image";
import styles from "@/styles/NowPlayingWidget.module.scss";

type NowPlayingIconProps = {
  albumImageUrl?: string;
  album?: string;
};

const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
  return str;
};

const fetcher = async (input: RequestInfo) => {
  const res = await fetch(input);

  return res.json();
};

const NowPlayingIcon = ({ albumImageUrl, album }: NowPlayingIconProps) => (
  <div className={styles.icon}>
    <span />
    <span />
    <span />
    {albumImageUrl && (
      <div className={styles.cover}>
        <Image
          src={albumImageUrl}
          width={13}
          height={13}
          alt={`${album} album cover`}
        />
      </div>
    )}
  </div>
);

const NowPlayingWidget = (): JSX.Element => {
  const { data } = useSWR(`/api/now-playing`, fetcher);
  const nowPlaying = `${data?.title} - ${data?.artist}`;

  return (
    <div className={styles.wrapper}>
      {data?.isPlaying ? (
        <a
          className={styles.widget}
          href={data?.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Currently playing on Spotify: ${nowPlaying}`}
        >
          <NowPlayingIcon
            albumImageUrl={data.albumImageUrl}
            album={data.album}
          />
          {truncate(nowPlaying, 46)}
        </a>
      ) : (
        <span>Spotify- Not playing</span>
      )}
    </div>
  );
};

export default NowPlayingWidget;

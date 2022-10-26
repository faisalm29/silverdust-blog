import { DefaultSeo } from "next-seo";

const config = {
  title: "Silverdust",
  description:
    "These might just dust, but it's silver. Who can resist something shiny?",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://silverdust.vercel.app",
    site_name: "Silverdust",
    images: [
      {
        url: "https://silverdust.vercel.app/og.jpg",
        alt: "Silverdust",
      },
    ],
  },
  twitter: {
    handle: "@hrrblealtruist",
    site: "@hrrblealtruist",
    cardType: "summary_large_image",
  },
};

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />;
};

export default SEO;

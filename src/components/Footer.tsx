import AnchorLink from "./AnchorLink";
import NowPlayingWidget from "./NowPlayingWidget";

const links = [
  {
    name: "Twitter ↗",
    url: "https://twitter.com/hrrblealtruist",
  },
  { name: "Github ↗", url: "https://github.com/faisalm29" },
  { name: "Contact", url: "mailto:sikseven08@gmail.com" },
  { name: "Changelog", url: "/Changelog" },
  { name: "RSS", url: "/rss" },
];

const year = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="grid grid-cols-1 grid-rows-[auto] gap-y-4 pb-4 md:grid-cols-12 md:gap-y-16 md:pb-16">
      <ul className="rows md:col-span-4 md:col-start-1 ">
        {links.map((link) => (
          <li className="mb-4" key={link.name}>
            <AnchorLink name={link.name} href={link.url} isUnderline={true} />
          </li>
        ))}
      </ul>
      <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
        <NowPlayingWidget />
      </div>
      <p className="text-center md:col-span-4 md:col-start-1 md:text-left">
        Created with 🤍 using{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          next.js
        </a>
        ,{" "}
        <a
          href="https://contentlayer.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          contentlayer
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          tailwind
        </a>
        , and deployed by{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          vercel
        </a>
        .
      </p>
      <p className="text-center md:col-span-4 md:col-start-9 md:justify-self-end md:text-left">
        &#169; Silverdust {year}
      </p>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import cn from "classnames";

type AnchorLinkProps = {
  name: string;
  href: string;
  isUnderline?: boolean;
};

const AnchorLink = ({
  name,
  href,
  isUnderline,
}: AnchorLinkProps): JSX.Element => {
  if (href.startsWith("https")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn({ underline: isUnderline })}
      >
        {name}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={cn({ underline: isUnderline })}>{name}</a>
    </Link>
  );
};

export default AnchorLink;

import Link from "next/link";
import cn from "classnames";

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
  type?: "button";
  href: string;
  onClick?: () => void;
  variant?: "footer-links";
};

const Button = ({
  children,
  type,
  href,
  onClick,
  variant,
}: ButtonProps): JSX.Element => {
  if (variant === "footer-links") {
    return (
      <Link href={href} className="underline">
        <a>{children}</a>
      </Link>
    );
  }

  if (href.startsWith("https")) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferer"
        className="underline"
      >
        <a>{children}</a>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default Button;

import cn from "classnames";

type HeaderProps = {
  title: string;
  description?: string;
  isHero: boolean;
};

const Header = ({ title, description, isHero }: HeaderProps): JSX.Element => {
  return (
    <div
      className={cn(
        { "mb-4 break-words border-b-[1px] border-b-secondary pb-16": isHero },
        { "mb-8": !isHero }
      )}
    >
      <h1
        className={cn(
          "font-black",
          { "text-[90px] tracking-[-7px]": isHero },
          { "text-[64px] tracking-[-4px]": !isHero }
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          { "text-[64px] leading-tight tracking-[-7px]": isHero },
          { "text-[45px] tracking-[-3px]": !isHero }
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default Header;

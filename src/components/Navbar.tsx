import AnchorLink from "./AnchorLink";

const links = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Snippets", url: "/snippets" },
  { name: "About", url: "/about" },
];

const Navbar = () => {
  return (
    <nav className="border-b-black flex items-center justify-between border-b-[1px] py-4">
      {links.map((link) => (
        <AnchorLink
          name={link.name}
          href={link.url}
          isUnderline={false}
          key={link.name}
        />
      ))}
    </nav>
  );
};

export default Navbar;

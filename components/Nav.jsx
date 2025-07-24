import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projetos" },
  { path: "/contact", name: "contato" },
];

const Nav = ({ containerStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-primary border-b-2 border-primary"
            } capitalize font-medium hover:text-primary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;

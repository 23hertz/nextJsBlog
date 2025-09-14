import Image from "next/image";
import Link from "next/link";

type NavProps = {
  menuOpen: boolean;
};

const Nav = ({ menuOpen }: NavProps) => {
  const asideIcons = [
    { name: "Home", icon: "/images/home.svg", href: "/" },
    { name: "Library", icon: "/images/uncheck-all-icon.svg", href: "#" },
    { name: "Profile", icon: "/images/person.png", href: "#" },
    { name: "Stories", icon: "/images/uncheck-all-icon.svg", href: "#" },
    { name: "Stats", icon: "/images/column-chart-line-icon.svg", href: "#" },
  ];

  return (
    
    <div>
      {menuOpen &&
        asideIcons.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex items-center gap-3 p-2 my-6 text-gray-700 hover:text-black"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="p-1 object-contain"
            />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
    </div>
  );
};

export default Nav;

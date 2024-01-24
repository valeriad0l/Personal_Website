import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="relative block py-2 pl-3 pr-4 gradient-text font-semibold sm:text-xl rounded md:p-0 hover:text-[#100075]">
        {title}
      </a>
    </Link>
  );
};

export default NavLink;



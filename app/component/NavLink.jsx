import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <div>
      <Link
        href={href}
        className="py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:"
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;

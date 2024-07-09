import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavLink = ({ href, title }) => {
  return (
    <div>
      <AnchorLink
        href={href}
        className="py-2 pl-3 pr-4 text-Gray2 font-medium sm:text-xl rounded md:p-0 hover:"
      >
        {title}
      </AnchorLink>
    </div>
  );
};

export default NavLink;

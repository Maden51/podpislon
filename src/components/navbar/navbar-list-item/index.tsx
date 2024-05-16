import { Link } from "react-router-dom";

type NavbarListItem = {
  className: string,
  children: string,
  link: string,
}

function NavbarListItem({className, children, link} : NavbarListItem) {
  return <li><Link to={link} className={className}>{children}</Link></li>
}

export default NavbarListItem;
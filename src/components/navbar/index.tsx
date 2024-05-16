import { Link, useLocation } from "react-router-dom";
import NavbarListItem from "./navbar-list-item";

function Navbar() {
  const {pathname} = useLocation();

  const links = [
    {
      link: '/about',
      text: 'О сервисе'
    },
    {
      link: '/prices',
      text: 'Цены'
    },
    {
      link: '/support',
      text: 'Поддержка'
    },
    {
      link: '/SMM',
      text: 'для СМИ'
    },
    {
      link: '/contacts',
      text: 'Контакты'
    }
  ]

  return (
    <div className="flex flex-row items-center justify-between">
      <Link to={'/'}>
        <img src="../src/assets/images/logo.svg" alt="лого Подпислон" />
      </Link>
      <nav className="ml-32">
        <ul className="flex flex-row justify-evenly">
          {links.map((link, i) => (
            <NavbarListItem key={i} className={pathname === link.link ? "bg-orange text-white cursor-default py-8 px-4 w-1/5 pointer-events-none" : "hover:text-white hover:bg-orange transition-colors py-8 px-4 w-1/5"} link={link.link}>{link.text}</NavbarListItem>
          ))} 
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
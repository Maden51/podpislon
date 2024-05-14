import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link to={'/'}>
        <img src="../src/assets/images/logo.svg" alt="лого Подпислон" />
      </Link>
      <nav className="ml-32">
        <ul className="flex flex-row gap-x-12">
          <li><Link to="/about" className="hover:text-orange transition-colors">О сервисе</Link></li>
          <li><Link to="/prices" className="hover:text-orange transition-colors">Цены</Link></li>
          <li><a href="#" className="hover:text-orange transition-colors">Поддержка</a></li>
          <li><Link to="/SMM" className="hover:text-orange transition-colors">Для СМИ</Link></li>
          <li><Link to="/contacts" className="hover:text-orange transition-colors">Контакты</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
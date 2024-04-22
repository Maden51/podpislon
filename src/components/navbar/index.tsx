function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <img src="../src/assets/images/logo.svg" alt="лого Подпислон" />
      </div>
      <nav className="ml-32">
        <ul className="flex flex-row gap-x-12">
          <li><a href="#" className="hover:text-orange transition-colors">О сервисе</a></li>
          <li><a href="#" className="hover:text-orange transition-colors">Цены</a></li>
          <li><a href="#" className="hover:text-orange transition-colors">Поддержка</a></li>
          <li><a href="#" className="hover:text-orange transition-colors">Для СМИ</a></li>
          <li><a href="#" className="hover:text-orange transition-colors">Контакты</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
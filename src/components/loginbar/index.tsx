function LoginBar() {
  return (
    <div className="flex flex-row items-center">
      <button className="flex flex-row gap-x-1.5 items-center text-dark-gray mr-12 hover:text-orange transition-colors"><img src="../src/assets/images/login-btn.svg" className=""/>Вход</button>
      <button className="text-orange border border-[#F79900] p-1.5 text-center hover:bg-dark-gray transition-colors">Регистрация</button>
    </div>
  )
}

export default LoginBar;
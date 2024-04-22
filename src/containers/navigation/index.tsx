import LoginBar from "../../components/loginbar";
import Navbar from "../../components/navbar";

function Navigation() {
  return (
    <header className="flex flex-row py-4 justify-between text-sm">
      <Navbar />
      <LoginBar />
    </header>
  )
}

export default Navigation;
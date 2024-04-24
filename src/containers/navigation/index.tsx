import LoginBar from "../../components/loginbar";
import Navbar from "../../components/navbar";
import PageLayout from "../../components/page-layout";

function Navigation() {
  return (
    <PageLayout>
      <header className="flex flex-row py-4 justify-between text-sm">
      <Navbar />
      <LoginBar />
      </header>
    </PageLayout>
  )
}

export default Navigation;
import LoginBar from "../../components/loginbar";
import Navbar from "../../components/navbar";
import PageLayout from "../../components/page-layout";

function Navigation() {
  return (
    <PageLayout>
      <header className="flex flex-row py-4 justify-between text-sm border-b-[1px] border-light-gray shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]">
      <Navbar />
      <LoginBar />
      </header>
    </PageLayout>
  )
}

export default Navigation;
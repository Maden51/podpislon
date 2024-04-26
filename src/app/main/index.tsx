import Advantages from "../../components/advantages";
import DescriptionList from "../../components/description-main/description-list";
import DescriptionText from "../../components/description-main/description-text";
import FormMain from "../../components/form-main";
import LaptopImage from "../../components/laptop-image";
import QaMain from "../../components/qa-main";
import TarifsMain from "../../components/tarifs-main";
import Footer from "../../containers/footer";
import Hero from "../../containers/hero";
import Navigation from "../../containers/navigation";


function Main() {
  return (
    <main>
    <Navigation />
      <Hero/>
      <Advantages/>
      <LaptopImage/>
      <DescriptionText title="КАК ЭТО РАБОТАЕТ" />
      <DescriptionList/>
      <FormMain/>
      <DescriptionText title="Разве это законно?" />
      <TarifsMain />
      <QaMain/>
      <Footer/>
    </main>
  )
}

export default Main;
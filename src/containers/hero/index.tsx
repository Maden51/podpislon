import HeroAside from "../../components/hero-aside";
import HeroMain from "../../components/hero-main";

function Hero() {
  return (
    <section className="flex flex-row justify-between">
      <HeroMain/>
      <HeroAside />
    </section>
  )
}

export default Hero;
import HeroAside from "../../components/hero-aside";
import HeroMain from "../../components/hero-main";
import ImageLayout from "../../components/image-layout";
import PageLayout from "../../components/page-layout";

function Hero() {
  return (
    <ImageLayout
      backgroundUrl="url('../src/assets/images/hero-background.png')" 
      pseudoClass="after:block after:w-[30%] after:absolute after:z-10 after:opacity-70 after:top-0 after:bottom-0 after:right-0 after:bg-black"
      bgColor=" bg-dark-gray"
    >
      <PageLayout>
        <section className="flex flex-row justify-between">
          <HeroMain/>
          <HeroAside />
        </section>
      </PageLayout>
    </ImageLayout>
  )
}

export default Hero;
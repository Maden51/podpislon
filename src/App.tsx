import Advantages from "./components/advantages";
import DescriptionMain from "./components/description-main";
import FormMain from "./components/form-main";
import ImageLayout from "./components/image-layout";
import LaptopImage from "./components/laptop-image";
import PageLayout from "./components/page-layout";
import Hero from "./containers/hero";
import Navigation from "./containers/navigation";

function App() {
  
  return (
    <main>
      <PageLayout>
        <Navigation />
      </PageLayout>
      <ImageLayout 
      backgroundUrl="url('../src/assets/images/hero-background.png')" 
      pseudoClass="after:block after:w-[30%] after:absolute after:z-10 after:opacity-70 after:top-0 after:bottom-0 after:right-0 after:bg-black"
      >
        <PageLayout>
          <Hero/>
        </PageLayout>
      </ImageLayout>
      <PageLayout>
        <Advantages/>
        <LaptopImage/>
        <DescriptionMain/>
      </PageLayout>
      <ImageLayout backgroundUrl="url('../src/assets/images/image-layout-2.png')">
        <PageLayout>
          <FormMain/>
        </PageLayout>
      </ImageLayout>
      <PageLayout>
        <Advantages/>
      </PageLayout>
    </main>
  );
}

export default App;

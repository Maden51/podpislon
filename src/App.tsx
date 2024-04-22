import Advantages from "./components/advantages";
import ImageLayout from "./components/image-layout";
import PageLayout from "./components/page-layout";
import Hero from "./containers/hero";
import Navigation from "./containers/navigation";

function App() {
  
  return (
    <>
      <PageLayout>
        <Navigation />
      </PageLayout>
      <ImageLayout 
      backgroundUrl="url('../src/assets/images/hero-background.png')" 
      >
        <PageLayout>
          <Hero/>
        </PageLayout>
      </ImageLayout>
      <PageLayout>
        <Advantages/>
      </PageLayout>
    </>

  );
}

export default App;

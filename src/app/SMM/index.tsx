import Breadcrumbs from "../../components/breadcrumbs";
import ButtonDownload from "../../components/buttons/button-download";
import PageLayout from "../../components/page-layout";
import SpeakerCard from "../../components/speaker-card";
import Footer from "../../containers/footer";
import Navigation from "../../containers/navigation";

function SMM() {
  const breadCrumbs = [
    {label: "Главная", link: "/"},
    {label: "Материалы для СМИ"},
  ]
  return (
    <div className="overflow-hidden flex flex-col min-h-screen font-sansReg">
      <Navigation/>
      <main>
        <Breadcrumbs breadcrumbs={breadCrumbs}  className="flex mb-11 pt-11" classNameDisabled="text-[#7D7D7D]" />
        <PageLayout>
          <h1 className=" text-h1 font-sansBold leading-none">Материалы для СМИ</h1>
          <div className="my-10">
            <h2 className=" font-sansBold text-lg">Подзаголовок</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam vel quidem doloribus placeat repudiandae alias ullam architecto labore quam saepe reprehenderit voluptates assumenda, fugit aperiam maiores harum. Distinctio, eligendi.</p>
          </div>
          <div className="mb-14">
            <h2 className=" font-sansBold text-lg">Подзаголовок</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam vel quidem doloribus placeat repudiandae alias ullam architecto labore quam saepe reprehenderit voluptates assumenda, fugit aperiam maiores harum. Distinctio, eligendi.</p>
          </div>
          <div className="flex gap-x-[100px] mb-20">
            <div>
              <h3 className=" font-sansBold leading-loose mb-4">Логотип сервиса SVG</h3>
              <ButtonDownload/>
            </div>
            <div>
              <h3 className=" font-sansBold leading-loose mb-4">Логотип сервиса SVG</h3>
              <ButtonDownload/>
            </div>
            <div>
              <h3 className=" font-sansBold leading-loose mb-4">Логотип сервиса SVG</h3>
              <ButtonDownload/>
            </div>
            <div>
              <h3 className=" font-sansBold leading-loose mb-4">Логотип сервиса SVG</h3>
              <ButtonDownload/>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-[40px] leading-none mb-7">Спикеры</h2>
            <div className="flex gap-x-20">
              <SpeakerCard 
                photoUrl="../src/assets/images/Speaker-1.png"
                name="Георгий Героев"
                position="CEO"
                mail="gg@podpislon.ru"
              />
              <SpeakerCard 
                photoUrl="../src/assets/images/Speaker-2.png"
                name="Вячеслав Дудоров"
                position="CTO"
                mail="vd@podpislon.ru"
              />
            </div>
          </div>
        </PageLayout>
      </main>
      <Footer />
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SMM;
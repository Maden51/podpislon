import { Map, Placemark } from "@pbe/react-yandex-maps";
import Breadcrumbs from "../../components/breadcrumbs";
import PageLayout from "../../components/page-layout";
import Footer from "../../containers/footer";
import Navigation from "../../containers/navigation";

function Contacts() {
  const breadCrumbs = [
    {label: "Главная", link: "/"},
    {label: "Контакты"},
  ]
  return (
    <div className="overflow-hidden flex flex-col min-h-screen font-sansReg">
      <Navigation />
      <main>
        <Breadcrumbs breadcrumbs={breadCrumbs} className="flex mb-11 pt-11" classNameDisabled="text-[#7D7D7D]"/>
        <PageLayout>
          <div className="pb-24 flex">
            <div className="max-w-[512px]">
              <h1 className="text-h1 leading-none font-sansBold">Контакты сервиса Подпислон</h1>
              <address className="my-9 leading-normal">г. Санкт-Петербург, ул. Уральская, д. 13, лит. К, ПОМЕЩ. 1-Н, КОМ. 27</address>
              <h2 className="text-orange">Отдел продаж</h2>
              <a className="block hover:text-orange transition-colors" href="tel:781233333">+7 812 333 33</a>
              <a className="block hover:text-orange transition-colors" href="mailto:sale!@podpisdoc.ru">sale!@podpisdoc.ru</a>
              <h2 className="text-orange mt-5">Поддерджка</h2>
              <a className="hover:text-orange transition-colors" href="mailto:support@podpisdoc.ru">support@podpisdoc.ru</a>
              <div className="flex mt-12 items-center border-2 border-orange py-3 px-5 w-fit">
                <div className=" font-sansBold text-xl">Подписывайтесь в соцсетях</div>
                <ul className="flex gap-x-4 ml-6">
                  <li><a href="#" className=" w-7 h-7 bg-[#1E97DB] rounded-full flex items-center justify-center"><img src="../src/assets/images/vk-icon.svg" /></a></li>
                  <li><a href="#" className=" w-7 h-7 bg-gradient-to-r from-[#B93826] from-0% to-100% to-[#5E26B9] rounded-full flex items-center justify-center"><img src="../src/assets/images/instagram-icon.svg" /></a></li>
                  <li><a href="#" className=" w-7 h-7 bg-[#FF2507] rounded-full flex items-center justify-center"><img src="../src/assets/images/youtube-icon.svg" /></a></li>
                </ul>
              </div>
            </div>
            <div className="ml-20 pt-4">
              <Map defaultState={{center: [59.953164, 30.263011], zoom: 13}} width={630} height={359}>
                <Placemark geometry={[59.953164, 30.263011]} />
              </Map>
            </div>
          </div>
        </PageLayout>
      </main>
      <Footer/>
    </div>
  )
}

export default Contacts;
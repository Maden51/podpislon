import Breadcrumbs from "../../components/breadcrumbs";
import ImageLayout from "../../components/image-layout";
import PageLayout from "../../components/page-layout";
import TarifsItem from "../../components/tarifs-main/tarifs-item";
import PriceItemList from "../../components/tarifs-main/tarifs-item/price-item-list";
import Footer from "../../containers/footer";
import Navigation from "../../containers/navigation";

function Prices() {
  const breadCrumbs = [
    {label: "Главная", link: "/"},
    {label: "Цены"},
  ]
  return (
    <div className="overflow-hidden flex flex-col min-h-screen font-sansReg ">
      <Navigation/>
      <main>
        <ImageLayout backgroundUrl="url(../src/assets/images/about-bg-2.png)">
          <Breadcrumbs breadcrumbs={breadCrumbs} className="flex mb-11 pt-11 text-white" classNameDisabled="text-[#7D7D7D]"/>
          <PageLayout>
            <div className="pt-32 pb-[240px]">
              <h1 className="uppercase font-sansBold text-[52px] text-white max-w-[661px] leading-none">10 бесплатных документов после регистрации</h1>
            </div>
          </PageLayout>
        </ImageLayout>
        <PageLayout>
          <p className=" leding-snug my-24">Вы предоплачиваете определенный пакет документов, например 10 штук. Списание происходит, когда вы добавляете и отправляете новый документ на подпись клиенту. Переотправка ссылки на подписание уже отправленного документа не уменьшает пакет. Добавление и отправка новой версии документа (например, переделанный договор) приводит к списанию остатка по пакету.</p>
          <div className="flex flex-row gap-x-10 mb-24">
            <TarifsItem title="10 документов" free="10 документов">
              <PriceItemList perItem={50} price={500} />
            </TarifsItem>
            <TarifsItem title="100 документов" hit free="10 документов">
              <PriceItemList perItem={40} price={4000} />
            </TarifsItem>
            <TarifsItem title="300 документов" free="10 документов">
              <PriceItemList perItem={30} price={9000} />
            </TarifsItem>
          </div>
          <div className="flex gap-x-10 mb-24">
            <div className="border-[3px] border-orange py-7 px-4 flex items-center justify-center max-w-[380px] w-full">
              <img src="../src/assets/images/free-print.svg" alt="иконка принтера" />
              <div className="text-lg max-w-36 leading-none ml-9">Нет расходов на печать</div>
            </div>
            <div className="border-[3px] border-orange py-7 px-4 flex items-center justify-center max-w-[380px] w-full">
              <img src="../src/assets/images/free-wallet.svg" alt="иконка кошелька" />
              <div className="text-lg max-w-36 leading-none ml-9">Нет почтовых расходов</div>
            </div>
            <div className="border-[3px] border-orange py-7 px-4 flex items-center justify-center max-w-[380px] w-full">
              <img src="../src/assets/images/free-icon-delivery-truck.svg" alt="иконка грузовика" />
              <div className="text-lg max-w-36 leading-none ml-9">Нет расходов на курьеров</div>
            </div>
          </div>
        </PageLayout>
      </main>
      <Footer />
    </div>
  )
}

export default Prices;
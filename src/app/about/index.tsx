import AboutCard from "../../components/about-card";
import Breadcrumbs from "../../components/breadcrumbs";
import ButtonMain from "../../components/buttons/button-main";
import ImageLayout from "../../components/image-layout";
import PageLayout from "../../components/page-layout";
import Footer from "../../containers/footer";
import Navigation from "../../containers/navigation";

function About() {
  const breadcrumbs = [
    {label: "Главная", link: "/"},
    {label: "О сервисе"},
  ]

  return (
    <div className="overflow-hidden flex flex-col min-h-screen">
      <Navigation/>
      <main>
        <ImageLayout backgroundUrl="url(../src/assets/images/about-bg.png)">
          <Breadcrumbs breadcrumbs={breadcrumbs} className="flex mb-11 pt-11" />
          <PageLayout>
            <div className="mt-16 font-sansBold pb-[160px]">
              <div className=" text-[#74797F] text-4xl leading-[116%] bg-white py-2.5 px-5 w-fit -rotate-2">Первый специализированный</div>
              <h1 className="text-[120px] leading-[116%] text-white -mt-5 uppercase">сервис <span className="text-orange">эдо</span></h1>
              <div className="uppercase text-[40px] text-white leading-[116%] -mt-3">для <span className=" font-sansItalic lowercase">работы с физлицами</span></div>
              <div className="pt-14 max-w-[582px] font-sans text-white leading-relaxed">
                <p>Последние годы активно развиваются сервисы электронного документаоборота для юридических лиц. Все больше и больше компаний  уходят от бумажного документооборота, выбирая ЭДО.  Однако работа с компаний с физлицами строится на старых принципах.</p>
              </div>
            </div>
          </PageLayout>
        </ImageLayout>
        <PageLayout>
          <div className="flex justify-between -mt-[85px] relative">
            <AboutCard text="Без визита в офис" icon="about-card-1.svg"/>
            <AboutCard text="Без токенов и приложений" icon="about-card-2.svg"/>
            <AboutCard text="Интеграция с CRM" icon="about-card-3.svg"/>
            <AboutCard text="Соответствует 63 ФЗ" icon="about-card-4.svg"/>
          </div>
          <div className="flex mt-20 pb-36">
            <div>
              <h2 className=" font-sansBold text-[40px] leading-[116%] max-w-[471px] mb-10">Клиент или сотрудник просто вводит код из СМС</h2>
              <button className="max-w-[301px] w-full bg-orange text-center py-4 flex gap-x-6 text-white font-sansBold text-xl leading-[116%] items-center justify-center border-r rounded-[278px] hover:text-light-gray hover:bg-dark-orange"><img src="../src/assets/images/play.svg" alt="иконка проигрывать видео" />Смотреть видео</button>
              <p className=" max-w-[420px] leading-loose text-sm mt-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quis optio, eveniet cum quaerat veritatis, quos natus necessitatibus nihil, laboriosam est ad exercitationem. Atque, accusantium eveniet numquam harum magni culpa.</p>
            </div>
            <div className="pt-[38px] ml-36 relative">
              <img src="../src/assets/images/about-image-desktop.png" alt="скриншот работы программы" />
              <img src="../src/assets/images/about-image-mobile.png" alt="скриншот работы на смратфоне" className=" absolute -left-[200px] -bottom-[155px]" />
              <div className="absolute -bottom-4 left-[18%]">
                <img src="../src/assets/images/arrow-part-1.svg" alt="линия стрелки" />
                <img className="absolute -bottom-[6px] -left-[6px]" src="../src/assets/images/arrow-part-2.svg" alt="конец стрелки" /> 
              </div>
            </div>
          </div>
        </PageLayout>
        <ImageLayout backgroundUrl="url(../src/assets/images/about-bg-2.png)" >
          <PageLayout>
            <div className="pt-24 pb-36 flex items-center">
              <h2 className="max-w-[661px] font-sansBold text-[52px] leading-none text-white uppercase mr-[77px]">10 бесплатных документов после регистрации</h2>
              <ButtonMain title="Попробовать бесплатно" svg="&#8594;" wmax="max-w-[379px]" />
            </div>
          </PageLayout>
        </ImageLayout>
        <PageLayout>
          <section className="mt-16">
            <h2 className="font-sansBold leading-relaxed text-[52px]">Для отдела продаж</h2>
            <p className="leading-relaxed max-w-[1020px]">Сделайте процесс работы с клиентом максимально простым и удобным для него. Это может быть вашим конкурентным преимуществом. Сделайте процесс работы с клиентом максимально простым и удобным для него. Это может быть вашим конкурентным преимуществом.</p>
            <div className="px-10 flex items-center">
              <img src="../src/assets/images/about-SD.png" alt="Графика отдела продаж"/>
              <div className="max-w-[284px] ml-[200px]">
                <h3 className=" font-sansBold text-xl leading-relaxed">Какие документы можно подписывать с клиентами?</h3>
                <ul className="list-disc mt-5">
                  <li className="ml-4 leading-loose">Договоры</li>
                  <li className="ml-4 leading-loose">Соглашения</li>
                  <li className="ml-4 leading-loose">NDA</li>  
                  <li className="ml-4 leading-loose">Акты</li>
                  <li className="ml-4 leading-loose">Накладные</li>
                  <li className="ml-4 leading-loose">Согласие на обработку данных</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="flex pb-24">
            <div>
              <h2 className="font-sansBold leading-relaxed text-[52px]">Для HR</h2>
              <p className="leading-relaxed">Развитие информациолнных технологий и пандемия 2020 года прочно  закрепили в нашей жизни понятие “удаленная работ”. Компании сокращают расходы на содержание офисов, находят лучшие кадры в регионах, оптимизируют свои процессы. Сервис подпислон может помочь систематизировать документооборот  с удаленными сотрудниками и сделать его юридически значимым. </p>
              <div className="max-w-[407px] mt-10">
                <h3 className=" font-sansBold text-xl leading-relaxed">Какие договоры можно подписывать с сотрудниками?</h3>
                <ul className="list-disc mt-5">
                  <li className="ml-4 leading-loose">Трудовой договор</li>
                  <li className="ml-4 leading-loose">Согласие на обработку данных</li>
                  <li className="ml-4 leading-loose">Служебные записки</li>
                  <li className="ml-4 leading-loose">Заявления</li>
                  <li className="ml-4 leading-loose">NDA</li>
                </ul>
              </div>
            </div>
            <img src="../src/assets/images/about-HR.png" alt="О работе HR отдела" />
          </section>
          <div className=" w-screen h-60 bg-dark-gray"></div>
        </PageLayout>
      </main>
      <footer className="mt-auto">
        <Footer/>
      </footer>
  </div>
  )
}

export default About;
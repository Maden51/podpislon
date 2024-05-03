import ButtonMain from "../buttons/button-main";

function HeroMain() {
  return (
    <section className="pt-56 pb-40 max-w-3xl text-white">
      <h1 className="font-sansBold text-[52px] leading-[106.7%] font-bold uppercase">ПОДПИСЫВАЙТЕ ДОГОВОРЫ С КЛИЕНТАМИ ПО СМС</h1>
      <p className="max-w-[489px] text-sm my-5">В настоящее время в России возможности заключения договоров и подписания документов в электронной форме несколько недооценены: в то время, когда быстро.</p>
      <ButtonMain title="Попробовать бесплатно" svg="&#8594;" wmax="max-w-[312px]"/>
    </section>
  )
}

export default HeroMain;
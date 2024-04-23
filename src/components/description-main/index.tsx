import DescriptionList from "./description-list";

function DescriptionMain() {
  return (
    <section className="mb-24">
      <div className="flex flex-row">
        <div>
          <h2 className="font-sansBold text-black leading-[140.2%] text-[52px] uppercase mb-2">Как это работает</h2>
          <p className="max-w-[656px] text-sm leading-[211.7%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
          <p className="max-w-[656px] text-sm leading-[211.7%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
        </div>
        <div className="relative ml-20 w-[483px] h-[330px] shadow-2xl flex justify-center items-center">
          <img src="../src/assets/images/description-image.png" alt="Тут должно быть видео" />
          <img src="../src/assets/images/play.svg" alt="Иконка проигрывателя" className="absolute z-10 " />
        </div>
      </div>
      <DescriptionList/>
    </section>
  )
}

export default DescriptionMain;
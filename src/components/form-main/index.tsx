import ButtonMain from "../buttons/button-main";

function FormMain(){
  return (
    <div  className="pt-20 pb-24">
      <h2 className=" font-sansBold text-[52px] leading-none text-white max-w-4xl">Менеджер отправляет договор на подпись из нашего прилождения в Битрикс24</h2>
      <form>
        <input className=" max-w-[380px] w-full font-sansLight text-sm mr-[30px] py-4 px-8 outline-none" type="email" placeholder="Email..." name="email" id="email" required />
        <label htmlFor="email"></label>
        <ButtonMain title="Тест на 14 дней" />
      </form>
    </div>
  )
}

export default FormMain;
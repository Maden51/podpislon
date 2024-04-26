import Breadcrumbs from "../../components/breadcrumbs";
import PageLayout from "../../components/page-layout";
import Navigation from "../../containers/navigation";

function Politics() {
  const breadcrumbs = [
    {label: "Главная", link: "/"},
    {label: "Документы"},
    {label: "Политика конфединциальности"}
  ]
  return (
    <>
      <Navigation/>
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
      <PageLayout>
        <h1 className=" font-sansBold text-[52px] leading-[116.2%] mb-11">Политика конфиденциальности и обработки персональных данных</h1>
        <div>
          <h2 className=" font-sansBold uppercase mb-1">ОБЪЕМ И КАТЕГОРИЯ ОБРАБАТЫВАЕМЫХ ПЕРСОНАЛЬНЫХ ДАННЫХ, КАТЕГОРИЯ СУБЪЕКТОВ ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
          <p className="leading-[156%] mb-8">Персональные данные, разрешенные к обработке в соответствии с настоящей политикой и предоставляемые Пользователями, являющимися физическими лицами, использующими Сервис от своего имени, путем заполнения соответствующих полей ввода при использовании Сервиса, могут включать в себя следующую информацию:</p>
          <ul className=" font-sansItalic leading-[156%] mb-8">
            <li >Фамилия, Имя, Отчество;</li>
            <li>Номер мобильного телефона;</li>
            <li>Адрес электронной почты;</li>
          </ul>
          <p className="leading-[156%] mb-8">В соответствии с настоящей политикой Оператор осуществляет обработку персональных данных лиц, относящихся к следующим категориям субъектов персональных данных:</p>
          <p>физические лица, использующие Сервис в соответствии с Соглашением об его использовании от своего имени.</p>
        </div>

      </PageLayout>
    </>
  )
}

export default Politics;
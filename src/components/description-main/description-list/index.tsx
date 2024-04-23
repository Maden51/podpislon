import DescriptionListItem from "./description-list-item";

function DescriptionList() {
  return (
    <div className="mt-20 flex flex-row flex-wrap gap-x-3">
      <DescriptionListItem number={1} text="Менеджер отправляет договор на подпись из нашего прилождения в Битрикс24"/>
      <DescriptionListItem number={2} text="Менеджер отправляет договор на подпись из нашего прилождения в Битрикс24"/>
      <DescriptionListItem number={3} text="Клиент получает смс со ссылкой на подписание договора"/>
      <DescriptionListItem number={4} text="Клиент читает договор в браузере, подписывает договор одноразовым кодом из смс"/>
      <DescriptionListItem number={5} text="Клиент получает  письмо с файлом PDF, подписанным простой электронной подписью"/>
      <DescriptionListItem number={6} text="Менеджер получает уведомление о подписании договора"/>
      <DescriptionListItem number={7} text="Подписанный договор сохраняется в базе данных приложения"/>
      <DescriptionListItem number={8} text="Клиент подписывает договор одноразовым кодом из смс"/>
    </div>
  )
}

export default DescriptionList;
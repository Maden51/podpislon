import PageLayout from "../page-layout";
import AdvantageItem from "./advantage-item";

type Advantages = {
  ref: HTMLDivElement;
}

function Advantages() {
  return (
    <PageLayout>
      <div className="flex flex-row gap-x-20 mt-20 pt-4 pb-3 justify-between" id="advantages">
      <AdvantageItem imageUrl="../src/assets/images/adv-item-1.svg" text="Подписание договора онлайн без визита в офис" />
      <AdvantageItem imageUrl="../src/assets/images/adv-item-2.svg" text="Экономия бумаги и времени " />
      <AdvantageItem imageUrl="../src/assets/images/adv-item-3.svg" text="Онлайн-архив всех заключенных договоров" />
      <AdvantageItem imageUrl="../src/assets/images/adv-item-4.svg" text="Полностью соответсвует ФЗ №63" />
      <AdvantageItem imageUrl="../src/assets/images/adv-item-5.svg" text="Документы признаються судебными органами " />
      </div>
    </PageLayout>
  )
}

export default Advantages;
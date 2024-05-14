import PageLayout from "../page-layout";
import TarifsItem from "./tarifs-item";
import TarifsItemList from "./tarifs-item/tarifs-item-list";
import TarifsItemPrice from "./tarifs-item/tarifs-item-price";

function TarifsMain() {
  return (
    <PageLayout>
      <div className="mt-12 mb-24">
        <h2 className="uppercase font-sansBold text-[52px] text-black leading-[140%] mb-4">тарифы</h2>
        <div className="flex flex-row gap-x-10">
          <TarifsItem title="Старт" free="первые 14 дней">
            <TarifsItemList tarifType="start" />
            <TarifsItemPrice />
          </TarifsItem>
          <TarifsItem title="Базовый" hit free="первые 14 дней">
            <TarifsItemList tarifType="base" />
            <TarifsItemPrice />
          </TarifsItem>
          <TarifsItem title="Дорогой" free="первые 14 дней">
            <TarifsItemList tarifType="expensive" />
            <TarifsItemPrice />
          </TarifsItem>
        </div>
      </div>
    </PageLayout>
  )
}

export default TarifsMain;
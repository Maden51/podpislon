import PageLayout from "../page-layout";
import TarifsItem from "./tarifs-item";

function TarifsMain() {
  return (
    <PageLayout>
      <div className="mt-12 mb-24">
        <h2 className="uppercase font-sansBold text-[52px] text-black leading-[140%] mb-4">тарифы</h2>
        <div className="flex flex-row gap-x-10">
          <TarifsItem title="Старт" tarifType="start"/>
          <TarifsItem title="Базовый" tarifType="base" hit/>
          <TarifsItem title="Дорогой" tarifType="expensive"/>
        </div>
      </div>
    </PageLayout>
  )
}

export default TarifsMain;
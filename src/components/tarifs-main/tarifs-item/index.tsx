import ButtonMain from "../../buttons/button-main";

type TarifsItem = {
  title: string,
  hit?: boolean,
  free: string,
  children?: React.ReactNode,
}

function TarifsItem({title, hit, children, free}: TarifsItem) {
  return (
    <div className="max-w-sm shadow-2xl w-full">
      {hit ? <h3 className="uppercase font-sansBold text-2xl text-white bg-orange leading-[140%] border-l-[3px] border-b-[3px] border-orange pt-4 pb-2 pl-5 ml-12 relative">{title} <span className=" font-walsheimBold capitalize text-lg leading-[165.6%] absolute right-3 top-0">Хит</span></h3> : 
      <h3 className="uppercase font-sansBold text-2xl leading-[140%] border-l-[3px] border-b-[3px] border-orange pt-4 pb-2 pl-5 ml-12">{title}</h3>
      }
      <div className="pb-7">
        {children}
        <div className="px-7 w-full">
          <ButtonMain title="Попробовать" svg="&#8594;"/>
        </div>
        <div className="text-center text-sm text-[#BDBDBD] mt-5">Бесплатно {free}</div>
      </div>
    </div>
  )
}

export default TarifsItem;
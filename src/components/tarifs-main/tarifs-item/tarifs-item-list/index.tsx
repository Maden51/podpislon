type TarifItemList = {
  tarifType: string,
}

function TarifsItemList({tarifType}: TarifItemList) {
  return (
    <ul className="px-[71px] mb-12 text-sm leading-[165.6%] mt-8">
      <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж керамической черепицы с комплектующими</li>
      <li className="text-light-gray">-</li>
      <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж шаговой обрешётки</li>
      <li className="text-light-gray">-</li>
      {tarifType === 'start' ? <li className=" text-list-gray">Монтаж контробрешётки</li> :
        <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж контробрешётки</li>
      }
      <li className="text-light-gray">-</li>
      {tarifType === "start" ? <li className="text-light-gray">Монтаж гидроизоляции</li> :
        <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж гидроизоляции</li>
        }
      <li className="text-light-gray">-</li>
      {tarifType === "start" || tarifType === "base" ? <li className="text-light-gray">Монтаж утепления кровли 200мм</li> :
        <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж утепления кровли 200мм</li>
        }
      <li className="text-light-gray">-</li>
      {tarifType === "start" || tarifType === "base" ? <li className="text-light-gray">Монтаж пароизоляции</li> :
        <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж пароизоляции</li>
      }
      <li className="text-light-gray">-</li>
      {tarifType === "start" || tarifType === "base" ? <li className="text-light-gray">Монтаж черновой обрешётки</li> :
        <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж черновой обрешётки</li>
      }
      <li className="text-light-gray">-</li>
      {tarifType === "start" || tarifType === "base" ? <li className="text-light-gray">Монтаж стропильной системы</li> :
        <li className="before:content-['+'] before:absolute before:block before:font-waslheim before:text-2xl before:text-orange before:leading-[165.6%] relative before:left-[-25px] before:top-[-8px]">Монтаж стропильной системы</li>
      }
    </ul>
  )
}

export default TarifsItemList;
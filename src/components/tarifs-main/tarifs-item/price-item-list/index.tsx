type PriceItemList = {
  perItem: number,
  price: number,
}

function PriceItemList({perItem, price}: PriceItemList) {
  return (
    <div className="text-center my-4 text-[#333] leading-relaxed">
      <div className=" text-lg mb-3">{perItem}₽ документ</div>
      <div className=" text-2xl mb-8"><span className=" font-sansBold">{price}</span> ₽</div>
    </div>
  )
}

export default PriceItemList;
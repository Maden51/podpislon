type AdvantageItem = {
  imageUrl: string,
  text: string,
}

function AdvantageItem({imageUrl, text}: AdvantageItem) {
  return (
  <div className="max-w-48">
    <img src={imageUrl} alt={text} />
    <span className="block w-[65px] h-[2px] bg-orange mt-5 mb-4"></span>
    <p className="text-sm leading-[140%]">{text}</p>
  </div>
  )
}

export default AdvantageItem;
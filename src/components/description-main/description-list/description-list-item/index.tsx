type DescriptionListItem = {
  text: string,
  number: number,
}


function DescriptionListItem({text, number} : DescriptionListItem) {
  return (
    <div className="max-w-[232px]">
      <div className="font-sansBlack leading-[188.7%] text-orange text-[64px]">{number}</div>
      <p className="text-sm leading-[188.7%] mt-[-20px]">{text}</p>
    </div>
  )
}

export default DescriptionListItem;
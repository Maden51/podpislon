type AboutCard = {
  icon: string,
  text: string,
}

function AboutCard({text, icon} : AboutCard) {
  return (
    <div className="border-orange bg-white border-[3px] px-6 py-5 text-center flex flex-col items-center max-w-[275px]">
      <div>
        <img src={`../src/assets/images/${icon}`} alt={text} className="w-[59px] h-[59px] mb-5" />
      </div>
      <div className="text-xl">{text}</div>
    </div>
  )
}

export default AboutCard;
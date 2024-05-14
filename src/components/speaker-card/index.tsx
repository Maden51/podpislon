type SpeakerCard = {
  photoUrl: string,
  name: string,
  mail: string,
  position: string,
}

function SpeakerCard(props: SpeakerCard) {
  return (
    <div className="flex gap-x-7 max-w-[441px] w-full">
      <img src={props.photoUrl} alt={props.name}/>
      <div className="py-7">
        <div className=" font-sansBold text-2xl leading-none">{props.name}</div>
        <div className="text-2xl mb-4">{props.position}</div>
        <div className="text-sm leading-none hover:text-orange transition-colors"><a href={`mailto:${props.mail}`}>{props.mail}</a></div>
      </div>
    </div>
  )
}

export default SpeakerCard;
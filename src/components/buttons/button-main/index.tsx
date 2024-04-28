type ButtonMain= {
  title: string,
  svg?: string,
  wmax?: string, 
}


function ButtonMain({title, svg, wmax}: ButtonMain) {
  return (
    <button className={"w-full max-h-[62px] font-sansMed text-sm text-black uppercase bg-orange py-4 px-7 text-center hover:bg-dark-orange transition-colors " + wmax}>{title} {svg}</button>
  )
}

export default ButtonMain;
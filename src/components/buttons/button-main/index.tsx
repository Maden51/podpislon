type ButtonMain= {
  title: string,
  svg?: string,
  wmax?: string, 
}


function ButtonMain({title, svg, wmax}: ButtonMain) {
  return (
    <button className={"w-full font-sansMed text-sm text-black uppercase bg-orange py-4 px-7 text-center mt-9 hover:bg-dark-orange transition-colors " + wmax}>{title} {svg}</button>
  )
}

export default ButtonMain;
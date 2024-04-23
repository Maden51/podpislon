type ButtonMain= {
  title: string,
  svg?: string, 
}


function ButtonMain({title, svg}: ButtonMain) {
  return (
    <button className="font-sansMed text-sm text-black uppercase bg-orange py-4 px-7 text-center mt-9 hover:bg-dark-orange transition-colors">{title} {svg}</button>
  )
}

export default ButtonMain;
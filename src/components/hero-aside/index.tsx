function HeroAside() {
  return (
    <aside className="text-sm pt-[385px] pb-[242px] text-white max-w-[150px] z-20">
      <p className="relative leading-[147.7%] before:block before:w-[114px] before:h-[2px] before:bg-white before:rotate-90 before:absolute before:right-28 before:top-16">Договор может быть заключен в любой форме, предусмотренной для совершения сделок.</p>
      <div className="mt-20 -rotate-90 translate-x-28 cursor-pointer hover:scale-110 transition-all">
        <a href="#advantages">Преимущества</a>
        <svg className="rotate-90 translate-x-12 -translate-y-[3.2rem]" width="8" height="116" viewBox="0 0 8 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.64645 115.354C3.84171 115.549 4.1583 115.549 4.35356 115.354L7.53554 112.172C7.7308 111.976 7.7308 111.66 7.53554 111.464C7.34028 111.269 7.02369 111.269 6.82843 111.464L4 114.293L1.17158 111.464C0.976316 111.269 0.659733 111.269 0.464471 111.464C0.269209 111.66 0.269209 111.976 0.464471 112.172L3.64645 115.354ZM3.5 2.18557e-08L3.50001 115L4.50001 115L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="white"/>
        </svg>
      </div>
    </aside>
  )
}

export default HeroAside;
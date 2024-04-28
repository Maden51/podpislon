type ImageLayout = {
  children: React.ReactNode;
  backgroundUrl?: string;
  bgGradient?: string;
  pseudoClass?: string;
  bgColor?: string;
}

function ImageLayout({children, backgroundUrl, pseudoClass, bgColor}: ImageLayout) {
  return (
    <div className={'relative w-full h-full bg-no-repeat bg-cover ' + pseudoClass + bgColor} style={{backgroundImage: backgroundUrl}}>
      {children}
    </div>
  )
}

export default ImageLayout;
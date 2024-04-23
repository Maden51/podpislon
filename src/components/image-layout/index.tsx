type ImageLayout = {
  children: React.ReactNode;
  backgroundUrl: string;
  bgGradient?: string;
  pseudoClass?: string;
}

// Разобраться с шириной окна

function ImageLayout({children, backgroundUrl, pseudoClass}: ImageLayout) {
  return (
    <div className={'relative w-full h-full bg-center bg-no-repeat bg-cover ' + pseudoClass} style={{backgroundImage: backgroundUrl}}>
      {children}
    </div>
  )
}

export default ImageLayout;
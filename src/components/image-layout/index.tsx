type ImageLayout = {
  children: React.ReactNode;
  backgroundUrl: string;
  bgGradient?: string;
}

// Разобраться с шириной окна

function ImageLayout({children, backgroundUrl}: ImageLayout) {
  return (
    <div className={'relative w-full h-full bg-center bg-no-repeat bg-cover after:block after:w-[30%] after:absolute after:z-10 after:opacity-70 after:top-0 after:bottom-0 after:right-0 after:bg-black'} style={{backgroundImage: backgroundUrl}}>
      {children}
    </div>
  )
}

export default ImageLayout;
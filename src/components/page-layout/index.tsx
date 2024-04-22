
type PageLayout = {
  children: React.ReactNode;
}

function PageLayout({children}: PageLayout) {
  return (
    <div className="w-full max-w-screen-desktop mx-auto my-0 box-border">
      {children}
    </div>
  )
}

export default (PageLayout);
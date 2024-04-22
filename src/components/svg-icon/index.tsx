type SvgIcon = {
  fill?: string,
  svgSrc: string,
}

function SvgIcon({fill, svgSrc}: SvgIcon) {
  return (
    <svg fill={fill}>{svgSrc}</svg>
  )
}

export default SvgIcon;
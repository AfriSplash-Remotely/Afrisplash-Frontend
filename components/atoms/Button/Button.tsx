
interface BtnProps{
    classes?: string
    type: "filled" | "bordered" 
    text: string
    bgColor?: "primary_green" | "primary_yellow" | "dark_blue" | "white-2"
    color: string
    borderColor?: "primary_green" | "primary_yellow" | "dark_blue" | "white-2"
}

const Button =({classes, type, text, bgColor, color, borderColor}: BtnProps)=> {
  return (
    <button className={`text-${color}  ${type==="filled"? `bg-${bgColor} ` : `border border-${borderColor && borderColor}` }`}>        
            {text}
    </button>
  )
}

export default Button;

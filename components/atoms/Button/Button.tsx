interface BtnProps {
  classes?: string;
  type: "filled" | "bordered";
  text: string;
  bgColor?: "primary_green" | "primary_yellow" | "dark_blue" | "white-2";
  color: string;
  borderColor?: "primary_green" | "primary_yellow" | "dark_blue" | "white-2";
  onClick?: ()=>void | any
}

const Button = ({
  classes,
  type,
  text,
  bgColor,
  color,
  borderColor,
  onClick,
}: BtnProps) => {
  return (
    <button
      className={`${classes}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

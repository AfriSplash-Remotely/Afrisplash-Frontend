import React from "react";

interface BtnProps {
  classes?: string;
  type?: "filled" | "bordered";
  tag?: React.ElementType;
  children: React.ReactNode;
  text: string;
  bgColor?: "primary_green" | "primary_yellow" | "dark_blue" | "white-2";
  color?: string;
  borderColor?: "primary_green" | "primary_yellow" | "dark_blue" | "white-2";
  [x: string]: any;
}

const Button = React.forwardRef(
  (
    {
      classes,
      type,
      children,
      text,
      tag,
      bgColor,
      color,
      borderColor,
      ...restProps
    }: BtnProps,
    ref
  ) => {
    let Tag = tag ? tag : "button";

    return (
      <Tag {...restProps} className={`${classes}`} ref={ref}>
        {text ? text : children}
      </Tag>
    );
  }
);

export default Button;

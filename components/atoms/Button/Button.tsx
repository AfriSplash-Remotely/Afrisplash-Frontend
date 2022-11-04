import React, { Ref } from "react";
import PropTypes, { InferProps } from "prop-types";

const BtnProps = {
  onClick: PropTypes.func,
  classes: PropTypes.string,
  type: PropTypes.oneOf(["filled", "bordered"]),
  tag: PropTypes.elementType,
  children: PropTypes.node,
  text: PropTypes.string,
  bgColor: PropTypes.oneOf([
    "primary_green",
    "primary_yellow",
    "dark_blue",
    "white-2",
  ]),
  color: PropTypes.string,
  borderColor: PropTypes.oneOf([
    "primary_green",
    "primary_yellow",
    "dark_blue",
    "white-2",
  ]),
};

const ButtonComponent = (
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
  }: InferProps<typeof BtnProps>,
  ref: Ref<HTMLInputElement>
) => {
  let Tag = tag ? tag : "button";

  return (
    <Tag {...restProps} className={`${classes}`} ref={ref}>
      {text ? text : children}
    </Tag>
  );
};
const Button = React.forwardRef(ButtonComponent);

export default Button;
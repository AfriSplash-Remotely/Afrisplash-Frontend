import PropTypes, { InferProps } from "prop-types";

const CheckBoxProps = {
  classes: PropTypes.string,
  onChange: PropTypes.func,
};

const CheckBox = ({ classes, onChange }: InferProps<typeof CheckBoxProps>) => {
  return (
    <>
      <input type="checkbox" className={`${classes}`} onChange={onChange} />
    </>
  );
};

export default CheckBox;

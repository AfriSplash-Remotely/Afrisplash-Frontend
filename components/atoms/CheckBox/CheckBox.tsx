import PropTypes, { InferProps } from "prop-types";

const CheckBoxProps = {
  classes:PropTypes.string.isRequired,
  onChange: PropTypes.any,
  text: PropTypes.string
}


const CheckBox = ({ classes, onChange, text }: InferProps<typeof CheckBoxProps>):JSX.Element => {
  return (
    <label className={`${text && 'flex items-center'}`}>
      <input type="checkbox" className={`${classes} ${text? 'mr-2': ''}`} onChange={onChange} />
      {text && text}
    </label>
  );
};

export default CheckBox;

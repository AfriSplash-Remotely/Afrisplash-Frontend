

type CheckBoxProps = {
  classes: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  text?: string
};

const CheckBox = ({ classes, onChange, text }:  CheckBoxProps):JSX.Element => {
  return (
    <label className={`${text && 'flex items-center'}`}>
      <input type="checkbox" className={`${classes} ${text? 'mr-2': ''}`} onChange={onChange} />
      {text && text}
    </label>
  );
};

export default CheckBox;

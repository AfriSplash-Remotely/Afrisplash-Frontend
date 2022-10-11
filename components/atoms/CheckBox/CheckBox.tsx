interface CheckBoxProps {
    classes?: string;
    onChange?: (e:any) => void | any;
}


const CheckBox = ({ classes, onChange }: CheckBoxProps) => {
    return (
        <>
            <input type="checkbox" className={`${classes}`} onChange={onChange}  />
        </>
    )
}

export default CheckBox;

interface CheckBoxProps {
    classes?: string;
    onSelect?: () => void | any;
}


const CheckBox = ({ classes, onSelect }: CheckBoxProps) => {
    return (
        <>
            <input type="checkbox" className={`${classes}`} onSelect={onSelect} />
        </>
    )
}

export default CheckBox;

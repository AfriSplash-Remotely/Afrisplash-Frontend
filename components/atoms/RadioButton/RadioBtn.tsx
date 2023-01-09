import PropTypes, { InferProps } from "prop-types";


const RadioBtnProps = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired

}

const RadioBtn = ({ label, value }: InferProps<typeof RadioBtnProps>) => {
    return (
        <>
            <div className="flex items-center gap-2 py-2">
                <input type='radio'
                    className="w-5 h-5 text-primary_green bg-primary_grey border-primary_grey focus:ring-primary_green focus:ring-2 "
                    value={value}
                />
                <label>{label}</label>

            </div>
        </>
    )

}

export default RadioBtn
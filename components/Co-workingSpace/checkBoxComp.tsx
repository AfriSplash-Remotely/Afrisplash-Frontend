import { ChangeEvent, useState } from 'react';

interface Option {
    value: string;
    label: string;
}

interface CheckboxGroupProps {
    options: Option[];
    onChange: (selectedValues: string[]) => void;
}

<<<<<<< HEAD
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, onChange }) => {
=======
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
>>>>>>> head reset
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedValues((prevSelectedValues) => [...prevSelectedValues, value]);
        } else {
            setSelectedValues((prevSelectedValues) =>
                prevSelectedValues.filter((selectedValue) => selectedValue !== value)
            );
        }
    };

    const isChecked = (value: string) => selectedValues.includes(value);

    return (
        <div className="space-y-8">
            {options.map((option) => (
                <label key={option.value} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={isChecked(option.value)}
                        onChange={handleCheckboxChange}
<<<<<<< HEAD
                        className=" appearance-none h-5 w-5 checked:bg-no-repeat checked:bg-cover checked:bg-[url(../assets/co-workingSpace/charm_tick.svg)]  focus:outline-none bg-[#E5E5E5] "
=======
                        className="appearance-none h-5 w-5 checked:bg-no-repeat checked:bg-cover checked:bg-[url(../assets/co-workingSpace/charm_tick.svg)]  focus:outline-none bg-[#E5E5E5]"
>>>>>>> head reset
                    />
                    <span className="text-gray-800">{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default CheckboxGroup;

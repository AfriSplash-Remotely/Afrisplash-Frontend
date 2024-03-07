import React from "react";
import PropTypes, { InferProps } from "prop-types";
import styles from "./toggleButton.module.scss";

const jobDataProps = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

function ToggleButton({
  label,
  onChange,
  isChecked,
}: InferProps<typeof jobDataProps>): JSX.Element {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => onChange(e);

  return (
    <div>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          onChange={handleOnChange}
          id="toggle"
          defaultChecked={isChecked}
          className={`${styles.toggleCheckbox} border-2 border-gray-300 absolute block w-6 h-6 rounded-full bg-white appearance-none cursor-pointer aspect-square`}
        />
        <label
          htmlFor="toggle"
          className={`${styles.toggleLabel} block overflow-hidden h-6 rounded-full cursor-pointer"`}
        ></label>
      </div>
      {label && (
        <label htmlFor="toggle" className="text-xs text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
}

export default ToggleButton;

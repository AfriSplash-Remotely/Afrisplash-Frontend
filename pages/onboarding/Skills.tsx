import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { StylesConfig } from "react-select";
import {
  experienceAction,
  skillsAction,
  skillsCategoryAction,
} from "store/candidateOnboarding/formSlice";
import type { RootState } from "store/store";

const selectStyle: StylesConfig = {
  control: (styles) => ({
    ...styles,
    padding: "4px 2px",
  }),
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Skills = () => {
  // const [isActive, setActive] = useState(false)

  // const btnSelect = "bg-green-900 text-white border px-20 py-2.5 rounded-full"
  // const btnDefault =
  //     "text-black border border-gray-500 px-20 py-2.5 rounded-full"

  const dispatch = useDispatch();
  const { skillsCategory, experience, skills } = useSelector(
    (state: RootState) => state.form
  );

  // const onToggle = () => {
  //     setActive(!isActive)
  // }

  return (
    <div className="px-6 sm:px-12 md:px-16 mb-8">
      <p className="font-medium text-lg mb-4">Add your skills</p>
      <form className="flex flex-wrap justify-between text-gray-500 mb-4">
        <label htmlFor="degree" className="basis-[100%] mt-5">
          <p>Category</p>
          <Select
            id="degree"
            options={options}
            styles={selectStyle}
            placeholder={skillsCategory}
            onChange={(e: any) => dispatch(skillsCategoryAction(e.value))}
          />
        </label>
        <label htmlFor="field" className="basis-[100%] mt-5">
          <p>Industy Expertise</p>
          <Select
            id="field"
            options={options}
            styles={selectStyle}
            placeholder={experience}
            onChange={(e: any) => dispatch(experienceAction(e.value))}
          />
        </label>
        <label htmlFor="degree" className="basis-[100%] mt-5">
          <p>Skills</p>
          <Select
            id="degree"
            options={options}
            styles={selectStyle}
            isMulti
            placeholder={skills}
            onChange={(e: any) => dispatch(skillsAction(e))}
          />
        </label>
      </form>
      <div className="px-2 py-8">
        <p className="font-medium text-lg mb-8">Suggested skills</p>
        {/* <div className="flex justify-between">
                    <button
                        className={isActive ? btnSelect : btnDefault}
                        onClick={() => onToggle()}                        
                    >
                        Photoshop
                    </button>
                    <button
                        className={isActive ? btnSelect : btnDefault}
                        onClick={() => onToggle()}                        
                    >
                        Figma
                    </button>
                    <button
                        className={isActive ? btnSelect : btnDefault}
                        onClick={() => onToggle()}                        
                    >
                        Illustrator
                    </button>
                </div> */}
      </div>
    </div>
  );
};

export default Skills;

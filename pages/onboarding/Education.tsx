import { useDispatch, useSelector } from "react-redux";
import Select, { StylesConfig } from "react-select";
import {
  degreeAction,
  eduDescriptionAction,
  eduEndDateAction,
  eduStartDateAction,
  fieldStudyAction,
  institutionNameAction,
} from "store/candidateOnboarding/formSlice";
import type { RootState } from "store/store";

const selectStyle: StylesConfig = {
  control: (styles) => ({
    ...styles,
    padding: "4px 2px",
  }),
};

const degreeOptions = [
  { value: "B.Sc", label: "B.Sc" },
  { value: "HND", label: "HND" },
  { value: "NCE", label: "NCE" },
];

const Education = () => {
  const {
    institutionName,
    degree,
    fieldStudy,
    eduStartDate,
    eduEndDate,
    eduDescription,
  } = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();

  return (
    <div className="px-6 sm:px-12 md:px-16 mb-8">
      <p className="font-medium text-lg mb-4">
        Add your educational background
      </p>
      <form className="flex flex-wrap justify-between text-gray-500 mb-4">
        <label htmlFor="company" className="basis-[100%] mt-5">
          <p>Institution name</p>
          <input
            type="text"
            id="company"
            className="input-el"
            value={institutionName}
            onChange={(e) => dispatch(institutionNameAction(e.target.value))}
            placeholder="eg. Kenyatta University"
          />
        </label>
        <label htmlFor="degree" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Degree</p>
          <Select
            id="degree"
            options={degreeOptions}
            styles={selectStyle}
            placeholder={degree}
            onChange={(e: any) => dispatch(degreeAction(e.value))}
          />
        </label>
        <label htmlFor="field" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Field of study</p>
          <Select
            id="field"
            options={degreeOptions}
            styles={selectStyle}
            placeholder={fieldStudy}
            onChange={(e: any) => dispatch(fieldStudyAction(e.value))}
          />
        </label>
        <label htmlFor="company" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Start date</p>
          <input
            type="date"
            id="company"
            value={eduStartDate}
            placeholder="dd/mm/yy"
            className="input-el"
            onChange={(e) => dispatch(eduStartDateAction(e.target.value))}
          />
        </label>
        <label htmlFor="position" className="basis-[100%] md:basis-[45%] mt-5">
          <p>End Date</p>
          <input
            type="date"
            id="position"
            value={eduEndDate}
            onChange={(e) => dispatch(eduEndDateAction(e.target.value))}
            placeholder="dd/mm/yy"
            className="input-el"
          />
        </label>
      </form>
      <div className="px-2 py-8">
        <label htmlFor="bio">
          <p className="block font-medium text-md text-gray-500 mb-4">
            Description
          </p>
          <textarea
            name="bio"
            id="bio"
            maxLength={150}
            value={eduDescription}
            onChange={(e) => dispatch(eduDescriptionAction(e.target.value))}
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
            placeholder="Tell us a little about yourself"
          />
          <p className="text-right text-sm text-gray-500">
            {eduDescription.length}/150
          </p>
        </label>
      </div>
    </div>
  );
};

export default Education;

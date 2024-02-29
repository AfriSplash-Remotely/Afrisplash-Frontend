import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const selectStyle = {
  control: (styles: any) => ({
    ...styles,
    padding: "4px 2px",
  }),
};

const degreeOptions: any = [
  { value: "B.Sc", label: "B.Sc" },
  { value: "HND", label: "HND" },
  { value: "NCE", label: "NCE" },
];

// Assuming `fieldOptions` for the "Field of Study" select, replace `degreeOptions` with appropriate options if necessary
const fieldOptions: any = [
  { value: "Computer Science", label: "Computer Science" },
  { value: "Business Administration", label: "Business Administration" },
  // Add more options as needed
];

const Education = ({ getDataFn }: { getDataFn?: (data: any) => void }): JSX.Element => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      institutionName: '',
      degree: { label: '', value: '' },
      fieldOfStudy: { label: '', value: '' },
      startDate: '',
      endDate: '',
      description: '',
    }
  });
  const formData = watch();

  React.useEffect(() => {
    if (getDataFn) getDataFn({
      education: [{
        institution_name: formData.institutionName,
        degree: formData.degree?.value as string,
        field_of_study: formData.fieldOfStudy?.value as string,
        date_start: formData.startDate,
        date_end: formData.endDate,
        description: formData.description
      }]
    });

  }, [formData]);

  // Watch the description field for dynamic character count
  const description = watch("description");

  return (
    <div className="px-6 sm:px-12 md:px-16 mb-8">
      <p className="font-medium text-lg mb-4">
        Add your educational background
      </p>
      <form className="flex flex-wrap justify-between text-gray-500 mb-4">
        <div className="basis-[100%] mt-5">
          <label htmlFor="institutionName">Institution name</label>
          <input
            {...control.register("institutionName")}
            type="text"
            id="institutionName"
            className="input-el"
            placeholder="eg. Kenyatta University"
          />
        </div>

        <div className="basis-[100%] md:basis-[45%] mt-5">
          <label htmlFor="degree">Degree</label>
          <Controller
            name="degree"
            control={control}
            render={({ field }) => (
              <Select {...field} options={degreeOptions} styles={selectStyle} />
            )}
          />
        </div>

        <div className="basis-[100%] md:basis-[45%] mt-5">
          <label htmlFor="fieldOfStudy">Field of study</label>
          <Controller
            name="fieldOfStudy"
            control={control}
            render={({ field }) => (
              <Select {...field} options={fieldOptions} styles={selectStyle} />
            )}
          />
        </div>

        <div className="basis-[100%] md:basis-[45%] mt-5">
          <label htmlFor="startDate">Start date</label>
          <input
            {...control.register("startDate")}
            type="date"
            id="startDate"
            className="input-el"
          />
        </div>

        <div className="basis-[100%] md:basis-[45%] mt-5">
          <label htmlFor="endDate">End Date</label>
          <input
            {...control.register("endDate")}
            type="date"
            id="endDate"
            className="input-el"
          />
        </div>

        <div className="px-2 py-8 w-full">
          <label htmlFor="description">Description</label>
          <textarea
            {...control.register("description")}
            id="description"
            maxLength={150}
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
            placeholder="Tell us a little about yourself"
          />
          <p className="text-right text-sm text-gray-500">
            {description?.length || 0}/150
          </p>
        </div>
      </form>
    </div>
  );
};

export default Education;

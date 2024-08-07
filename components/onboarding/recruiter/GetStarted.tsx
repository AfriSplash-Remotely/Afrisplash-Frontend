/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function GetStarted({ getDataFn }: { getDataFn: (data: any) => void }): JSX.Element {
  const [companyName, setCompanyName] = React.useState("")
  const [role, SetRole] = React.useState("")

  React.useEffect(() => {
    if (getDataFn) {
      getDataFn({ companyName, role })
    }
  }, [companyName])

  return (
    <div className="px-8 md:px-16">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-1">Start Your Journey</h1>
        <p className="font-medium text-lg mb-6">Get access to a community of developers with top skills in a wild range of stacks</p>
      </div>

      <label htmlFor="companyName">
        <p className="block font-medium text-lg mb-4">company Name</p>
        <input
          name="companyName"
          id="companyName"
          className="border-2 border-gray-300 rounded-md mb-2 w-full py-2 pl-4 outline-none"
          placeholder="Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>

      <label htmlFor="role">
        <p className="block font-medium text-lg mb-4">Your Role in the Company</p>
        <input
          name="role"
          id="role"
          className="border-2 border-gray-300 rounded-md mb-2 w-full py-2 pl-4 outline-none"
          placeholder="Role"
          onChange={(e) => SetRole(e.target.value)}
        />
      </label>
    </div>
  );
};

export default GetStarted;

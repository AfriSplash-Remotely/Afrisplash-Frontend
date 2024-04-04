import React from "react";

function Bio({ getDataFn }: { getDataFn: (data: any) => void }): JSX.Element {
  const [bio, setBio] = React.useState("")
  const [staff, setStaff] = React.useState<number>(0)
  const [location, setLocation] = React.useState("")

  React.useEffect(() => {
    if (getDataFn) {
      getDataFn({ bio, staff, location })
    }
  }, [bio])

  return (
    <div className="px-8 md:px-16">
      <div className="text-center">
        <h1 className=" font-bold text-2xl mb-1">Let&apos;s Set up your work space</h1>
        <p className="font-medium text-lg text-gray-700 mb-6">Tell us more about your workspace</p>

      </div>
      <label htmlFor="bio">
        <p className="block font-medium text-lg mb-4">Team Size</p>
        <input
          type="number"
          name="staff"
          id="staff"
          className="border-2 border-gray-300 rounded-md mb-2 w-full py-2 pl-4 outline-none"
          placeholder="Team Size"
          onChange={(e) => setStaff(Number(e.target.value))}
        />
      </label>

      <label htmlFor="bio">
        <p className="block font-medium text-lg mb-4">Company Location</p>
        <input
          type="text"
          name="location"
          id="Location Address"
          className="border-2 border-gray-300 rounded-md mb-2 w-full  py-2 pl-4 outline-none"
          placeholder="industry"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>

      <label htmlFor="bio">
        <p className="block font-medium text-lg mb-4">Write your bio</p>
        <textarea
          name="bio"
          id="bio"
          className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          placeholder="Introduce yourself briefly. Talk about your work, your interests, and your achievements"
          onChange={(e) => setBio(e.target.value)}
          maxLength={150}
        />
        {/* <p className="text-right text-sm text-gray-500">{bioDesc.length}/150</p> */}
      </label>
    </div>
  );
};

export default Bio;

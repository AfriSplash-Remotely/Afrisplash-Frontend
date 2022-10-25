import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import {
  bioAction,
  imgUploadAction,
} from "store/candidateOnboarding/formSlice";
import type { RootState } from "store/store";

const Bio = () => {
  const { imgURL }: any = useSelector((state: RootState) => state.form.imgFile);
  const bioDesc: string = useSelector((state: RootState) => state.form.bio);

  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".svg"],
    },
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) => {
        const imgURL = URL.createObjectURL(file);
        const formData = new FormData();
        formData.append("profile-picture", file, file.name);
        dispatch(imgUploadAction({ imgURL, formData }));
      });
    },
  });

  return (
    <div className="px-8 md:px-16">
      <p className="font-medium text-lg mb-4">Upload your profile picture</p>
      {!imgURL && (
        <div
          className="py-16 md:py-24 px-12 border-2 border-gray-500 border-dashed rounded-md mb-8"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p className="text-center">
            Drag & drop your files here or{" "}
            <span className="font-semibold underline cursor-pointer">
              browse
            </span>
          </p>
        </div>
      )}
      {imgURL && (
        <div className="flex flex-col sm:flex-row gap-8 md:gap-24 md:pl-4 items-center py-2 mb-8">
          <div className="rounded-lg overflow-hidden shadow-sm shadow-indigo-200 w-[200px] h-[200px] relative">
            <Image
              src={imgURL}
              width={200}
              height={200}
              objectFit="cover"
              alt="profile pic"
            />
            <div
              className="absolute bottom-1 right-2 bg-indigo-500 bg-opacity-50 p-1 rounded-md cursor-pointer"
              {...getRootProps()}
            >
              <ArrowUpTrayIcon className="w-6 text-slate-100" />
            </div>
          </div>
          <ul className="list-disc text-gray-500">
            <li>Choose a high-quality headshot</li>
            <li>Use a current picture</li>
            <li>Don&rsquo;t use pictures with busy backgrounds</li>
            <li>Your face must be well-lit</li>
            <li>Look pleasant</li>
          </ul>
        </div>
      )}
      <label htmlFor="bio">
        <p className="block font-medium text-lg mb-4">Upload your bio</p>
        <textarea
          name="bio"
          id="bio"
          className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          placeholder="Introduce yourself. Talk about your work, your interests and your achievements"
          onChange={(e) => dispatch(bioAction(e.target.value))}
          value={bioDesc}
          maxLength={150}
        />
        <p className="text-right text-sm text-gray-500">{bioDesc.length}/150</p>
      </label>
    </div>
  );
};

export default Bio;

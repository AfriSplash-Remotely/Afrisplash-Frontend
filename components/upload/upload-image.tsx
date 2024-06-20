import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

import { UploadImage } from "@/assets";
import { storage } from "../../firebase";
import Image from "next/image";
interface IFile {
    label?: string;
    getFileUrl?: any;
    setPreviewing?: any;
}
const UploadPhoto: React.FC<IFile> = ({ getFileUrl, setPreviewing }) => {
    const [, setFileUrl] = useState("");
    const [, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<Blob | MediaSource | any>();
    const [preview, setPreview] = useState("");
    const [success, setSuccess] = useState(false);

    const getFiles = (files: any) => {
        if (!files) return;
        setSelectedFile(files[0]);
        const objectUrl = URL?.createObjectURL(files[0]);
        setPreview(objectUrl);
        // setPreviewing(objectUrl);
    };

    const uploadFile = (e: any) => {
        e.preventDefault();
        setLoading(true);
        const storageRef = ref(storage, `/files/${selectedFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            () => {
                setSuccess(false);
                setLoading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setFileUrl(url);
                    getFileUrl(url); //whats this for?
                    setSuccess(true);
                    setSelectedFile("");
                    setLoading(false);

                   
                    // setPreview("");
                });
            }
        );
    };

    const cancel = () => {
        setPreview("");
        setPreviewing("");
        setLoading(false);
    };

    return (
        <>
            {preview ? (
                <div className="flex flex-col relative h-auto min-h-[224px]  max-h-[250px] mt-2 border-dashed border-[1px] rounded-md">
                    <Image
                        src={preview && preview}
                        alt="preview"
                        className="w-full h-full object-contain overflow-hidden"
                    />
                    {preview && success ? null : (
                        <div className="flex absolute justify-end items-center space-x-3 top-2 right-6 w-full ">
                            <button
                                className="flex justify-center items-center bg-lemonGreen text-white px-4 py-2 rounded-md cursor-pointer bg-black"
                                onClick={uploadFile}
                                disabled={loading}
                            >
                                {loading ? "Uploading..." : "Upload"}
                            </button>
                            <div
                                onClick={cancel}
                                className="w-8 h-auto cursor-pointer bg-black"
                            >
                                <FaTimesCircle className="text-white text-3xl" />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex   relative w-full h-[200px] border border-gray-500 border-dashed rounded-[6px] items-center justify-between ">
                    <div className="w-full  absolute flex justify-center z-10">
                        <input
                            type="file"
                            className="opacity-0 inset-0 z-20 absolute"
                            onChange={(e) => getFiles(e.target.files)}
                        />

                        <UploadImage />
                    </div>
                </div>
            )}
        </>
    );
};

export default UploadPhoto;

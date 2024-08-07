import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import { UploadIcon } from "@/assets/svg";
const apiEndpoint = "https://afrisplash-473196ceadbb.herokuapp.com/api/v1/users/upload";

interface FileUploadProps {
    fileUrl: string;
    setFileUrl: (url: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ fileUrl, setFileUrl }) => {
    const [filePicked, setFilePicked] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (filePicked) {
            handleFileUpload();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filePicked]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFilePicked(selectedFile);
        }
    };

    const handleFileUpload = async () => {
        if (!filePicked) return;

        setLoading(true);

        const formData = new FormData();
        formData.append("image", filePicked);

        try {
            const response = await axios.post(apiEndpoint, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setFileUrl(response.data.url);
            setLoading(false);
        } catch (error) {
            console.error("Error uploading file:", error);
            toast.error("Error uploading file. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full h-[80px] border border-dashed border-border flex items-center justify-center rounded-md ">
                {fileUrl ? (
                    <p>Uploaded</p>
                ) : (
                    <div className="flex flex-col items-center justify-center ">
                        <span>
                            <UploadIcon />
                        </span>
                        <span className="text-[#94A3B8] mt-2 inter text-xs">
                            Drag and drop file, any type allowed.
                        </span>
                    </div>
                )}
                <input
                    type="file"
                    className="absolute w-full h-full opacity-0 cursor-pointer inset-0"
                    onChange={handleFileChange}
                />
            </div>
            {loading && <p className="mt-2 text-blue-500">Uploading...</p>}
        </div>
    );
};

export default FileUpload;

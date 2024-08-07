import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import { UploadIcon } from "@/assets/svg";
const apiEndpoint = "https://afrisplash-473196ceadbb.herokuapp.com/api/v1/users/upload";
interface ImageUploadProps {

    imageUrl: string;
    setImageUrl: (url: string) => void;
    label?: string;
}


const ImageUpload: React.FC<ImageUploadProps> = ({

    imageUrl,
    setImageUrl,
    label,
}) => {
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (image) {
            handleImageUpload();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedImage = e.target.files[0];
            if (selectedImage.size > 1048576) {
                // 1MB in bytes
                toast.error("File size exceeds 1MB. Please upload a smaller file.");
            } else {
                setImage(selectedImage);
            }
        }
    };

    const handleImageUpload = async () => {
        if (!image) return;

        setLoading(true);

        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await axios.post(apiEndpoint, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setImageUrl(response.data.url);

            setLoading(false);
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Error uploading image. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full mb-2">

            {label && (
                <label className="text-sm  lg:text-base text-[#606172]  font-semibold  ">
                    {label}
                </label>
            )}
            </div>
            <div className="relative w-full h-[120px] border border-dashed border-border flex items-center justify-center rounded-md ">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center ">
                            <span>
                                <UploadIcon />
                       </span>
                        <span className="text-[#94A3B8] mt-2 inter text-xs">
                            Drag and drop image, 1mb max.
                        </span>
                    </div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    className="absolute w-full h-full opacity-0 cursor-pointer inset-0"
                    onChange={handleImageChange}
                />
            </div>
            {loading && <p className="mt-2 text-blue-500">Uploading...</p>}
        </div>
    );
};

export default ImageUpload;

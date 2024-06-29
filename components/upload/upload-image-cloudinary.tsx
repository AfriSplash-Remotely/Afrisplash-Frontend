// components/CloudinaryUploadWidget.tsx

import React, { useEffect } from 'react';

interface CloudinaryUploadWidgetProps {
    onUpload: (info: any) => void;
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ onUpload }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            
            if (window.cloudinary) {

                const myWidget = window?.cloudinary.createUploadWidget({
                    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,
                    uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string,
                }, (error: any, result: { event: string; info: any; }) => {
                    if (!error && result && result.event === "success") {
                        console.log('Done! Here is the image info: ', result.info);
                        onUpload(result.info);
                    }
                });

                document.getElementById("upload_widget")?.addEventListener("click", function () {
                    myWidget.open();
                }, false);
            }
        };
    }, [onUpload]);

    return (
        <button id="upload_widget" className="cloudinary-button">
            Upload
        </button>
    );
};

export default CloudinaryUploadWidget;

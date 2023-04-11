/* eslint-disable react/prop-types */
import React from 'react'
import type { NextPage } from "next";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import styles from "styles/Login.module.scss";
import person1 from "assets/person1.png";
import person2 from "assets/person2.png";
import africanWomanSmiling from "assets/authentication/africanwomansmiling.png";
import africanWoman from "assets/authentication/africanwoman.png";
import africanMan from "assets/authentication/man.png";
import layoutstyles from "./Layout.module.scss";

const AuthLayoutProp = {
    children: PropTypes.node.isRequired,
};

const images = [
    africanWomanSmiling,
    africanWoman,
    africanMan,
];


const AuthLayout: NextPage<InferProps<typeof AuthLayoutProp>> = ({
    children,
}) => {
    const [currentImage, setCurrentImage] = React.useState(0);


    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(currentImage => {
                const nextImage = currentImage + 1;
                return nextImage < images.length ? nextImage : 0;
            });
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>

            <div className="w-full flex h-full">
                <div className="w-full md:w-6/12">
                    <div className="w-9/12 mx-auto">
                        <nav className={styles.nav}>
                            <Image
                                src="/admin_logo.svg"
                                alt="afrisplash"
                                width={150}
                                height={150}
                            />
                        </nav>
                        {children}

                    </div>
                </div>
                <div className={`${styles.span2} relative w-6/12 py-24 bg-[#FDF1C9] hidden md:flex justify-center`}>
                    <div
                        className={`${styles.bg}  pt-10 px-8 md:w-[100%] lg:w-[70%] xl:w-[60%] xxl:w-50 rounded-[24px] relative xxl:max-h-[50%]`}
                    >
                        <div
                            className="absolute rounded-[24px] bg-white py-4 px-6 top-44 -right-8 hidden lg:block"
                            style={{
                                boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Image src={person2} alt="africanwomansmiling.png" />
                        </div>
                        <p className="text-xl  lg:text-3xl font-[600]">
                            Go global- join the community to get top remote jobs from truly
                            inclusive companies
                        </p>
                        <div
                            className="absolute rounded-[24px] bg-white py-4 px-6 bottom-48 -left-[8%]  hidden lg:block"
                            style={{
                                boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Image src={person1} alt="africanwomansmiling.png" />
                        </div>
                        {images.map((imageUrl, index) => {
                            return <div key={index}
                                className={`bottom-0 absolute -right-[16%] xxl:-right-[12%] opacity-0 ${layoutstyles.img_contaner} ${currentImage === index ? layoutstyles.fadeIn : ''}`}
                            >
                                <Image
                                    src={imageUrl}
                                    alt="Slider Image"
                                />


                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

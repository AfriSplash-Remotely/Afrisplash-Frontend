/* eslint-disable react/prop-types */
import type { NextPage } from "next";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import styles from "styles/Login.module.scss";
import person1 from "assets/person1.png";
import person2 from "assets/person2.png";
import layoutstyles from "./Layout.module.scss";

const AuthLayoutProp = {
    children: PropTypes.node.isRequired,
};




const AuthLayout: NextPage<InferProps<typeof AuthLayoutProp>> = ({
    children,
}) => {
    return (
        <div className={styles.container}>

            <div className="w-full flex ">
                <div className="w-6/12">
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
                <div className={`${styles.span2} relative w-6/12  bg-[#FDF1C9]`}>
                    <div
                        className={`${styles.bg}  pt-10 mt-14 px-8 w-[80%] rounded-3xl mx-auto`}
                    >
                        <div
                            className="absolute rounded-3xl bg-white py-4 px-6 top-48 right-14"
                            style={{
                                boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Image src={person2} alt="africanwomansmiling.png" />
                        </div>
                        <p className="text-[32px] font-[600]">
                            Go global- join the community to get top remote jobs from truly
                            inclusive companies
                        </p>
                        <div
                            className="absolute rounded-3xl bg-white py-4 px-6 bottom-60 left-14"
                            style={{
                                boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Image src={person1} alt="africanwomansmiling.png" />
                        </div>
                        <div className={layoutstyles.imgContainer}>
                            <div className={`${layoutstyles.img} ml-32`} id={layoutstyles['pic3']}>
                            </div>
                            <div className={`${layoutstyles.img} ml-16`} id={layoutstyles['pic2']}>
                            </div>
                            <div className={`${layoutstyles.img} ml-32`} id={layoutstyles['pic1']}>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

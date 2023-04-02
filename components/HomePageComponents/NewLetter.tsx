import React from 'react'
import Image from "next/image";
import newsletter from "assets/images/newsletter.png";
import styles from "./styles.module.scss";

function Newsletter(): JSX.Element {
    return (
        <section className={`w-full  bg-[#FFC42D]`}>
            <div className={`${styles.Newsletter} py-20  afri-container`}>
                <div className={`relative overflow-hidden flex w-full px-16 py-32 ${styles.Newsletterbx}`}>
                    <div>
                        <h3 className="text-3xl text-black font-semibold pb-14">
                            Sign Up for our Newsletter
                        </h3>

                        <div className="flex flex-wrap justify-content-center justify-items-start gap-6 ">
                            <div className="py-4 flex justify-content-center justify-items-start items-center  gap-6">
                                <div className="relative">
                                    <label>
                                        Enter your Full Name:
                                    </label>
                                    <input
                                        className="block outline-none w-full rounded border-2 bg-grey-50 py-2 px-3"
                                        type="text"
                                        placeholder="Firstname LastName"
                                    />

                                </div>

                                <div className="relative mb-3 ">
                                    <label>
                                        Enter your Email:
                                    </label>
                                    <input
                                        className="block outline-none w-full rounded border-2 bg-grey-50 py-2 px-3"
                                        type="text"
                                        placeholder="yourmail@mail.com"
                                    />

                                </div>


                                <button className="block outline-none rounded-lg text-white bg-black py-3 px-8" type="submit">Get Notified
                                </button>

                            </div>



                        </div>
                    </div>
                    <div className={`${styles.NewsletterImg} `}>
                        <Image src={newsletter} alt="newsletter" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Newsletter
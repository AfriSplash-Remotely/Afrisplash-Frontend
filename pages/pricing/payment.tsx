import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import GeneralLayout from "@/layouts/generalLayout";
import RadioBtn from "@/components/atoms/RadioButton/RadioBtn";
import Visa from "@/assets/icons/visa.png"
import Paypal from "@/assets/icons/paypal.png"
import { ChevronDownIcon} from "@heroicons/react/24/outline";
import Button from "@/components/atoms/Button/Button";


const Payment: NextPage = () => {
    return (
        <GeneralLayout>
            <div className="relative">
                <section className="bg-gray-100 w-full pb-16">
                    <div className="afri-container">
                        <div className="mx-auto pt-16 pb-4">
                            <div className="w-full h-4 rounded-xl bg-lighter_green"></div>
                        </div>
                        <h3 className="text-base font-semibold text-primary_green float-right">Cancel</h3>

                        <div className="py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h2 className="text-dark_500 text-2xl font-semibold">Payment Method</h2>
                                    <hr className='mt-6' />

                                    <div className="py-2 flex gap-6 items-center">
                                        <div className="flex  items-center">
                                            <RadioBtn label={""} value={"visa"} />
                                            <Image  src={Visa} alt={"visa payment"}/>
                                        </div>
                                        <div className="flex  items-center">
                                            <RadioBtn label={""} value={"paypal"} />
                                            <Image src={Paypal} alt={"paypal payment"} />
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <div className="mb-4">
                                            <h3 className="text-lg">Card number</h3>
                                            <input type="text" className="mt-2 border border-gray-400 w-full h-14 rounded-md px-4 pr-16 focus:outline-gray-600"/>
                                        </div>

                                        <div className="pt-4 flex justify-between items-center gap-6">
                                            <div>
                                                <h3 className="text-lg">Expiration date</h3>
                                                <input type="text" className="mt-2 border border-gray-400 w-full h-14 rounded-md px-4 pr-16 focus:outline-gray-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg">Security code</h3>
                                                <input type="text" className="mt-2 border border-gray-400 w-full h-14 rounded-md px-4 pr-16 focus:outline-gray-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex justify-center items-center">
                                        <ChevronDownIcon className="w-5 h-5 text-primary_green" />
                                    </div>
                                    <div className="bg-lighter_green w-full h-auto rounded-md p-12">
                                        <h3 className="text-xl font-semibold">Invoice</h3>
                                        <p className="mt-4 text-base">Billed <span className="font-semibold text-primary_green">in US Dollars</span></p>
                                        <div className="mt-8 flex justify-between">
                                            <p className="text-base">Diamond Plan</p>
                                            <p className="text-base">$50.00/month</p>
                                        </div>
                                        <p className="text-base mt-2">5 job credits</p>
                                        <p className="text-base mt-2">1 day approval</p>
                                        <div className="mt-8 flex justify-between">
                                            <p className="text-base font-semibold">Tax</p>
                                            <p className="text-base font-semibold">$0.00</p>
                                        </div>
                                        <hr className='mt-6' />
                                        <div className="mt-8 flex justify-between">
                                            <p className="text-base font-semibold">Total</p>
                                            <p className="text-base font-semibold">$50.00</p>
                                        </div>
                                        <div className="py-12 flex justify-center">
                                            <Button
                                                type='filled'
                                                color='white'
                                                text='Pay now'
                                                classes="w-full h-12 rounded-md text-sm font-medium   text-white bg-primary_green hover:opacity-80"
                                            />
                                        </div>
                                        <div className="pt-4">
                                            <p className="text-base text-grey leading-loose">By selecting “Pay now”, I understand that I am enrolling in a subscription
                                                plan and I authorize Afrisplash to charge my payment method each month
                                                at the then-current list price (plus applicable taxes) unless I cancel. I can
                                                cancel anytime by going to my Billing page in the Account Settings.</p>
                                            <span className="text-primary_green font-semibold cursor-pointer">Learn more</span>

                                        </div>
                                        <div className="py-6">
                                            <p className="text-base text-grey">Your receipt will be sent to</p>
                                            <div className="mt-4 flex justify-between">
                                                <p className="text-base text-dark_500 font-semibold">damilolaiyanu@gmail.com</p>
                                                <h3 className="text-primary_green font-bold text-lg">Edit</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </GeneralLayout>
    )
}


export default Payment;
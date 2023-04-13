import React from "react";
import Navigation from "./NavBar/NavBar";
// import "../CheckBox/CheckBox.module.scss";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import CheckBox from "components/atoms/CheckBox/CheckBox";
const Payment = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <section className="w-full h-full px-12 py-10 bg-gray-50 ">
        <hr className="w-12/12 border-8 flex items-center mx-auto text-gray-400" />
        <p className="text-right cursor-pointer py-4 underline text-green-800">
          Cancel
        </p>
        <div className="flex justify-between  ">
          <div>
            <h3 className="py-4">Payment Method</h3>
            <hr className="w-12/12 text-gray-800" />
            <div className="flex justify-left gap-10 flex-row content-center py-3">
              <div className="flex gap-2 items-center">
                <CheckBox classes="CheckBox:checked" />
                <FaCcMastercard size={40} className="text-orange-700" />
                <FaCcVisa size={40} />
              </div>

              <div className="flex gap-2 items-center">
                <CheckBox classes="CheckBox:checked" />
                <FaCcPaypal size={40} className="text-blue-700" />
              </div>
            </div>
            <form>
              <label>Card Number</label>
              <p>
                <input
                  type="text"
                  className="outline-none w-10/12 p-2 bg-gray-50 border-2 rounded-4"
                />
              </p>
              <div className="flex justify-around py-2">
                <div>
                  <label>Expiration Date</label>
                  <p>
                    <input
                      type="text"
                      className="outline-none w-6/12 p-2 bg-gray-50 border-2 rounded-4"
                    />
                  </p>
                </div>
                <div>
                  <label>Security Code</label>
                  <p>
                    <input
                      type="text"
                      className="outline-none w-6/12 p-2 bg-gray-50 border-2 rounded-4"
                    />
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-gray-200 py-6 w-6/12 px-6">
            <h3 className="font-semibold text-2xl">Invoice</h3>
            <p className="py-3 mb-3 font-m">
              Billed in <span className="text-green-600">US Dollars</span>
            </p>
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">Diamond Plan</h3>
              <h3 className="font-semibold text-lg">$50.00/month</h3>
            </div>
            <p>5 job credits</p>
            <p>1 year approval</p>
            <div className="flex justify-between mt-6">
              <h3 className="font-semibold text-lg">Tax</h3>
              <h3 className="font-semibold text-lg">$0.00</h3>
            </div>
            <hr className="w-full text-black-800 py-4" />
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">Total</h3>
              <h3 className="font-semibold text-lg">$50.00</h3>
            </div>
            <button className="w-full p-4 bg-green-800 text-center mt-10 font-semibold text-white">
              Pay Now
            </button>
            <p className="text-justify pt-6">
              By selecting “Pay now”, I understand that I am enrolling in a
              subscription plan and I authorize Afrisplash to charge my payment
              method each month at the then-current list price (plus applicable
              taxes) unless I cancel. I can cancel anytime by going to my
              Billing page in the Account Settings.
            </p>
            <p className="underline text-green-800 font-semibold mb-4">
              Learn More
            </p>
            <p>Your receipt will be sent to</p>
            <div className="flex justify-between">
              <h3 className="font-semibold underline text-green-800 text-m">
                damilolaiyanu@gmail.com
              </h3>
              <h3 className="font-semibold text-m text-green-800">Edit</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;

import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import PropTypes, { InferProps } from "prop-types";
import Link from "next/link";


const PricingCardProps = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  isPopular: PropTypes.bool.isRequired,
  activeSlide: PropTypes.bool.isRequired,
};

export default function PricingCard({
  title,
  description,
  price,
  offers,
  isPopular,
  activeSlide,
}: InferProps<typeof PricingCardProps>): JSX.Element {
  return (
    <div
      className={`pb-6 mx-2  border-2 rounded-xl ${
        activeSlide ? "bg-primary_green text-[#D6ECDC]" : "bg-white text-black"
      }`}
    >
      <div className="p-4">
        <h4 className={`text-2xl text-left font-semibold ${activeSlide ? "text-[#FFC42D]" : ""}`}>{title}</h4>
        <p className={`text-base  py-7 ${activeSlide ? "text-[#D6ECDC]" : "text-black"}`}>{description}</p>
        <h3 className={`text-5xl  text-left font-semibold mb-7 ${activeSlide ? "text-white" : "text-black"}`}>
          {price}
        </h3>
        <Link href="/pricing/payment">
        <button
          className={`text-center text-sm font-normal text-white rounded-md border-none w-full p-3  ${
            activeSlide ? "bg-[#FFC42D]" : " bg-primary_green"
          }`}
        >
          Buy Credit
        </button>
        </Link>

      </div>
      <hr className="w-full text-black border-b border-t-0 h-0" />
      <div className="p-4">
        <h4 className={`text-base text-left pb-6 font-semibold  ${activeSlide ? "text-white" : "text-black"}`}>
          Includes:
        </h4>
        {offers.map((offer) => {
          return (
            <div key={offer} className="flex gap-3 py-2 justify-left">
              <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
              <p>{offer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import GeneralLayout from "@/layouts/generalLayout";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import PricingCard from "@/components/Pricing/PricingCard";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pricingData } from "@/utils";
import { useRouter } from "next/router";

const Pricing: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/")
<<<<<<< HEAD
  }, []);
=======
  });
>>>>>>> head reset
  const [activeSlide, setActiveSlide] = React.useState<number>(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    speed: 500,
    slidesToShow: 3,
<<<<<<< HEAD
    // slidesToScroll: 3,
=======
>>>>>>> head reset
    initialSlide: 0,
    beforeChange: ({}, next: number) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <GeneralLayout>
      <div className="relative">
        <section className="bg-gray-100 w-full pb-16">
          <div className="afri-container">
            <h3 className="text-center mx-auto py-12 text-2xl font-semibold">Featured Jobs</h3>
            <button className="border-1 p-3 text-base font-semibold text-green-800 border-green-800 rounded-lg border">
              Job Credit
            </button>
            <p className="text-sm font-normal text-gray-900 py-4">
              You can buy job credits if you would like to feature your job posts
            </p>
          </div>
          <div className=" overflow-hidden ">
            <div className="btn flex flex-end pb-4 justify-end ">
              <ArrowLeftCircleIcon
                color="rgba(13, 85, 32, 1)"
                width={35}
                height={35}
                data-te-slide="prev"
                data-te-target="#carouselExampleControls"
              />
              <ArrowRightCircleIcon
                color="rgba(13, 85, 32, 1)"
                width={35}
                height={35}
                data-te-slide="next"
                data-te-target="#carouselExampleControls"
              />
            </div>
            <Slider {...settings}>
              {pricingData.map((item, index) => {
                return (
                  <div key={item.title}>
                    <PricingCard {...item} activeSlide={activeSlide === index} />
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* PRICE PLANS */}

          <div className="afri-container">
            <h4 className="text-center text-2xl font-semibold py-6">
              Want to try out our job board first?
              <br />
              Post a free job today
            </h4>
            <button className="border flex justify-center border-primary_green rounded-md mx-auto align-items-center mb-5 p-5">
              Post a Free Job
            </button>
            <div className="flex gap-3 justify-center text-primary_green">
              <CheckCircleIcon width={25} height={25} />
              <p className="text-black">5-10 Candidates</p>
              <CheckCircleIcon width={25} height={25} />
              <p className="text-black">Published for 14 days</p>
              <CheckCircleIcon width={25} height={25} />
              <p className="text-black">Slow Approval</p>
              <CheckCircleIcon width={25} height={25} />
              <p className="text-black">No Verified Company</p>
            </div>
          </div>
        </section>
      </div>
    </GeneralLayout>
  );
};

export default Pricing;

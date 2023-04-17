import { NextPage } from "next";
import React from "react";
import Navigation from "@/components/molecules/Navigation/Navigation";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Pricing: NextPage = () => {
  return (
    <div className="">
      <Navigation />
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

        {/* PRICE PLANS */}
        <div className="card-pricing pb-6">
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

          <div className="card-price flex flex-row justify-left md:flex-wrap gap-4">
            <div className="card-info flex-1 md:flex-1 w-4/12 h-auto  border-2 rounded-xl">
              <div className="p-4">
                <h4 className="text-black text-lg text-left font-semibold">Silver Plan</h4>
                <p className="text-sm font-normal text-gray-900 py-4">1 job credit can be used to feature 1 job post</p>
                <h3 className="text-3xl text-black text-left font-semibold py-4">$20.00</h3>
                <button className="text-center text-sm font-normal text-white border-none w-full p-3 bg-green-900">
                  Buy Credit
                </button>
              </div>
              <hr className="w-full text-black" />
              <div className="p-4">
                <h4 className="text-black text-m text-left pb-6 font-semibold">Includes:</h4>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>1 Job Credit</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Featured for 1 week</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Published for 2 Months</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>1 Day Approval</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Verified Company</p>
                </div>
              </div>
            </div>

            <div className="card-info flex-1 md:flex-1 w-4/12 h-auto bg-green-900 border-2 rounded-xl">
              <div className="p-4">
                <div className="flex justify-between">
                  <h4 className="text-yellow-400 text-lg text-left font-semibold">Bronze Plan</h4>
                  <button className="rounded-xl text-white font-sm border-2 bg-yellow-400 w-auto border-transparent">
                    Popular
                  </button>
                </div>

                <p className="text-sm font-normal text-white py-4">1 job credit can be used to feature 1 job post</p>
                <h3 className="text-3xl text-yellow-400 text-left font-semibold py-4">$50.00</h3>
                <button className="text-center text-sm font-normal text-white border-none w-full p-3 bg-yellow-400">
                  Buy Credit
                </button>
              </div>
              <hr className="w-full text-black" />
              <div className="p-4">
                <h4 className="text-white text-m text-left pb-6 font-semibold">Includes:</h4>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(225, 225, 225, 1)" width={25} height={25} />
                  <p className="text-white">1 Job Credit</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(225, 225, 225, 1)" width={25} height={25} />
                  <p className="text-white">Featured for 1 week</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(225, 225, 225, 1)" width={25} height={25} />
                  <p className="text-white">Published for 2 Months</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(225, 225, 225, 1)" width={25} height={25} />
                  <p className="text-white">1 Day Approval</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(225, 225, 225, 1)" width={25} height={25} />
                  <p className="text-white">Verified Company</p>
                </div>
              </div>
            </div>

            <div className="card-info flex-1 md:flex-1 w-4/12 h-auto  border-2 rounded-xl">
              <div className="p-4">
                <h4 className="text-black text-lg text-left font-semibold">Diamond Plan</h4>
                <p className="text-sm font-normal text-gray-900 py-4">1 job credit can be used to feature 1 job post</p>
                <h3 className="text-3xl text-black text-left font-semibold py-4">$70.00</h3>
                <button className="text-center text-sm font-normal text-white border-none w-full p-3 bg-green-900">
                  Buy Credit
                </button>
              </div>
              <hr className="w-full text-black" />
              <div className="p-4">
                <h4 className="text-black text-m text-left pb-6 font-semibold">Includes:</h4>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>1 Job Credit</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Featured for 1 week</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Published for 2 Months</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>1 Day Approval</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Verified Company</p>
                </div>
              </div>
            </div>

            <div className="card-info flex-1 md:flex-1 w-4/12 h-auto  border-2 rounded-xl">
              <div className="p-4">
                <h4 className="text-black text-lg text-left font-semibold">Silver Plan</h4>
                <p className="text-sm font-normal text-gray-900 py-4">1 job credit can be used to feature 1 job post</p>
                <h3 className="text-3xl text-black text-left font-semibold py-4">$20.00</h3>
                <button className="text-center text-sm font-normal text-white border-none w-full p-3 bg-green-900">
                  Buy Credit
                </button>
              </div>
              <hr className="w-full text-black" />
              <div className="p-4">
                <h4 className="text-black text-m text-left pb-6 font-semibold">Includes:</h4>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>1 Job Credit</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Featured for 1 week</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Published for 2 Months</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>1 Day Approval</p>
                </div>
                <div className="flex gap-3 py-2 justify-left">
                  <CheckCircleIcon color="rgba(214, 236, 220, 1)" width={25} height={25} />
                  <p>Verified Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  );
};

export default Pricing;

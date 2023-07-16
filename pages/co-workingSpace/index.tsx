import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import GeneralLayout from "@/layouts/generalLayout";
import Button from "@/components/atoms/Button/Button";
import LocationSearch from "@/components/filterComponent/LocationSearch";
import CoWorkingSpaceCard from "components/Co-workingSpace/CoWorkingSpaceCard";
import { coWorkingSpaceData, nearbyCardData } from "@/utils"

const CoWorkingSpace: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Afrisplash presents workspace providers that are enthusiastic 
        about the african dream with a unique opportunity to sell workspaces." />
      </Head>
      <GeneralLayout>
          <div className="bg-cover bg-no-repeat bg-[url(../assets/co-workingSpace/targetBg.svg)] pt-[10%] pb-[16%] ">
            <div className="afri-container ">
            <h1 className="xl:text-[48px] text-3xl md:text-4xl text-white_2 font-bold md:mb-8 mb-4">
                  Target a vibrant community fond of trying new workspaces
                </h1>
            <h5 className=" font-light text-base md:text-2xl text-white md:w-[50%] text-left md:text-center mx-auto">
                  Afrisplash presents workspace providers that are enthusiastic
                  about the african dream with a unique opportunity to sell
                  workspaces.
                </h5>

            </div>
          </div>
          <div className="afri-container">
          <div className="py-14">
            <h1 className="md:text-start text-center text-4xl font-bold mb-8">
                Find the perfect space
              </h1>
              <div className="xl:w-[40%] md:w-[45%]">
                <LocationSearch
                  classes="mt-8"
                  placeholder="Choose location"
                  showSelect={false}
                  showFilter={true}
                />
              </div>
            </div>
          </div>
          <div className="afri-container mb-8">
            
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                {coWorkingSpaceData.map((coWorkingSpace) => (
                  <CoWorkingSpaceCard
                    key={coWorkingSpace.id}
                    name={coWorkingSpace.name}
                    distance={coWorkingSpace.distance}
                    amount={coWorkingSpace.amount}
                    details={coWorkingSpace.details}
                    src={coWorkingSpace.src}
                  />
                ))}
              </div>
          </div>
          <div className="bg-[#FFEDC0] py-14">
            <div className="afri-container mb-5">
            <h1 className="md:text-start text-center text-4xl font-bold mb-8">
                Workspaces near you
              </h1>
            </div>
          <div className="afri-container grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {nearbyCardData.map((nearbySpace) => (
                <CoWorkingSpaceCard
                  key={nearbySpace.id}
                  name={nearbySpace.name}
                  distance={nearbySpace.distance}
                  amount={nearbySpace.amount}
                  src={nearbySpace.src} />
              ))}
            </div>
          </div>
          <div className="text-center md:p-16 p-5">
          <h1 className="text-3xl font-semibold text-dark_blue mb-5">
              Get updated with relevant news from the community
            </h1>
          <h5 className="text-base text-[#667085] mb-14">
              Join over 200 talents and brands already growing with our
              community.
            </h5>
            <div className="grid md:grid-cols-5 grid-cols-3 lg:w-[60%] md:w-[80%]  m-auto mb-14">
              <input
              className="md:col-span-4 col-span-2 block outline-none w-full rounded-l-lg border bg-grey-50 py-2 px-3"
                type="text"
                placeholder="Enter your email"
              />
              <Button
                type="filled"
                color="white"
                text="Subscribe"
              classes="h-12 rounded-r-lg text-sm font-medium capitalize  text-white bg-sub_btn"
              />
            </div>
          </div>
      </GeneralLayout>
    </div>
  );
};

export default CoWorkingSpace;

import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import ToggleButton from "components/atoms/ToggleButton";
import ExperienceCard from "components/ExperienceCard";
import AdminLayout from "layouts/adminLayout";
import BrifecaseIcon from "assets/admin_icons/brifecase-cross.svg";
import ClockIcon from "assets/admin_icons/clock.svg";
import EditIcon from "assets/admin_icons/edit-2.svg";

const positions = [
  {
    id: "lkjhg",
    company: "Microsoft",
    year: "2016- 2018",
    jobTitle: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
const ProfileCardHeaderProps = {
  title: PropTypes.string.isRequired,
};
function ProfileCardHeader({
  title,
}: InferProps<typeof ProfileCardHeaderProps>): JSX.Element {
  return (
    <div className="flex w-full items-center mb-4">
      <p className="text-lg font-bold w-full mx-1">{title}</p>
      <div className="w-6 h-6">
        <div className="flex items-center justify-center flex-1 h-full p-1 border rounded-lg border-gray-400">
          <div className="flex-1 h-6 w-6 relative rounded-full">
            <Image
              src={EditIcon}
              alt="edit-icon"
              aria-hidden="true"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Blog: NextPage = () => {
  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-2 lg:gap-4	">
        <div className="w-full lg:w-[31.6%]">
          {/* profile */}
          <div className="rounded-xl bg-white">
            <div className="flex gap-4 p-4">
              <Image
                alt="profile-avater"
                className="w-16 h-16 border-4 rounded-full border-white"
                src="https://via.placeholder.com/70.875x72"
              />
              <div className="w-full">
                <ProfileCardHeader title="Adaeze Ruby" />
                <div className="flex w-full">
                  <div className="w-full">
                    <div className="flex space-x-2 items-center w-24 h-4 mb-2 ">
                      <div className="w-1/6 h-4">
                        <div className="h-4 w-4 relative p-0.5 bg-green-100 rounded">
                          <Image
                            src={ClockIcon}
                            alt="edit-icon"
                            aria-hidden="true"
                            layout="fill"
                          />{" "}
                        </div>
                      </div>
                      <p className="text-sm text-black text-opacity-60">
                        Full - Time
                      </p>
                    </div>
                    <div className="flex space-x-1.5 items-center w-36 h-4">
                      <div className="w-4 h-4">
                        <div className="h-4 w-4 relative p-0.5 bg-green-100 rounded">
                          <Image
                            src={BrifecaseIcon}
                            alt="edit-icon"
                            aria-hidden="true"
                            layout="fill"
                          />{" "}
                        </div>
                      </div>
                      <p className="text-sm text-black text-opacity-60">
                        Product Designer
                      </p>
                    </div>
                  </div>
                  <ToggleButton onChange={console.log} />
                </div>
              </div>
            </div>
            <hr className="h-0 w-full border-b border-gray-100" />

            {/* bio */}
            <div className="p-4">
              <ProfileCardHeader title="Bio" />
              <div>
                <p className=" text-base leading-snug text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum cumque possimus laboriosam iste blanditiis laborum
                  omnis tempora est eos minus veniam molestias sapiente
                  perspiciatis, animi non tempore nulla illum a.
                </p>
              </div>
            </div>
            <hr className="h-0 w-full border-b border-gray-100" />

            <div className="p-4">
              <ProfileCardHeader title="Contact" />
              <div className=" text-base leading-snug text-gray-500">
                <span className="font-semibold">Email:</span> someone@email.com
              </div>
              <div className=" text-base leading-snug text-gray-500">
                <span className="font-semibold">Phone:</span> +234 8130312056
              </div>
              <div className=" text-base leading-snug text-gray-500">
                <span className="font-semibold">Location:</span> Nigeria
              </div>
            </div>
            <hr className="h-0 w-full border-b border-gray-100" />

            <div className="p-4">
              <ProfileCardHeader title="Skills" />
              <div className="flex gap-2">
                <div className="w-full border p-2 rounded-xl">Design</div>
                <div className="w-full border p-2 rounded-xl">Tech</div>
                <div className="w-full border p-2 rounded-xl">Product</div>
              </div>
            </div>
            <hr className="h-0 w-full border-b border-gray-100" />

            <div className="p-4">
              <ProfileCardHeader title="Languages" />
              <div>
                <div className=" text-base leading-snug text-gray-500 flex gap-2">
                  <div>
                    <span className="font-semibold">English - </span> Fluent
                  </div>
                  <div>
                    <span className="font-semibold">Russian - </span> Advanced
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-0 w-full border-b border-gray-100" />

            <div className="p-4">
              <ProfileCardHeader title="Profile 60% Completed" />
              <div className="my-4 w-full bg-light_green relative h-3 rounded-full	overflow-hidden">
                <div className="w-[45%] h-full bg-primary_green absolute left-0 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[31.6%]">
          <ExperienceCard
            positions={Array.from({ length: 5 }, (_, _elem) => positions[0])}
          />
        </div>
        <div className="w-full lg:w-[31.6%]">
          <ExperienceCard
            positions={Array.from({ length: 5 }, (_, _elem) => positions[0])}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Blog;

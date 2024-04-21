import React, { useState } from "react";
import AdminLayout from "@/layouts/adminLayout";
import pic9 from "assets/images/pic9.png";
import { ApplicantAccordion } from "@/components/Dashboard/recruiter/applicants/ApplicantAccordion";
import { ApplicantsStatsCard } from "@/components/Dashboard/recruiter/applicants/StatsCard";
import { ApplicantsTab } from "@/components/Dashboard/recruiter/applicants/ApplicantTab";

export default function Applicants(): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <AdminLayout>
      <div className="flex flex-col justify-between space-y-10">
        <span className="text-base md:text-xl font-bold">Applicants</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <ApplicantsStatsCard title="Jobs" data="30" />
          <ApplicantsStatsCard title="Applicants" data="49" />
          <ApplicantsStatsCard title="Interview Schedule" data="20" />
          <ApplicantsStatsCard title="Rejected" data="92" />
        </div>
        <div className="space-y-4">
          <div className="w-full md:w-1/2">
            <ApplicantsTab
              buttons={["Created Jobs", "Applicants"]}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
          <div className="bg-white rounded-xl space-y-6 p-4 md:p-6">
            <div className="space-y-4 -border border-red-300">
              {[1, 2, 3, 4].map((_, i) => (
                <ApplicantAccordion
                  key={i}
                  jobTitle="Software Developer Job"
                  desc="Job description goes here and works as expected"
                  candidate={[
                    { id: "eretr", name: "Geo Johnson", avatar: `${pic9.src}` },
                  ]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

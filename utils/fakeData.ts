import { StaticImageData } from "next/image";
import User from "assets/admin_avatars/admin_avatar.svg";
import GhanaFlag from "assets/general/ghana-flag.svg";
import Image1 from "assets/images/image1.png";
import Image2 from "assets/images/image2.png";
import Image3 from "assets/images/image3.png";
import Image4 from "assets/images/image4.png";
import Image5 from "assets/images/image5.png";
import pic1 from "assets/images/pic1.png";
import pic2 from "assets/images/pic2.png";
import pic3 from "assets/images/pic3.png";
import pic4 from "assets/images/pic4.png";
import pic5 from "assets/images/pic5.png";
import pic6 from "assets/images/pic6.png";
import pic7 from "assets/images/pic7.png";
import pic8 from "assets/images/pic8.png";
import pic9 from "assets/images/pic9.png";
import workSpace1 from "@/assets/co-workingSpace/workSpace1.png";
import workSpace2 from "@/assets/co-workingSpace/workSpace2.png";
import workSpace3 from "@/assets/co-workingSpace/workSpace3.png";
import workSpace4 from "@/assets/co-workingSpace/workSpace4.png";
import workSpace5 from "@/assets/co-workingSpace/workSpace5.png";


import CameronImage from "assets/teams/cameron.png";
import JacobImage from "assets/teams/jacob.png";
import RobertImage from "assets/teams/robert.png";
import WadeImage from "assets/teams/wade.png";
import { FiBriefcase } from "react-icons/fi";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const toArrayOfObjects = (objectDetails: any, length: number) => {
  let data: Array<any> = [];
  for (let i = 0; i < length; i++) {
    data = [...data, objectDetails];
  }
  return data;
};
export const jobCat = {
  Icon: FiBriefcase,
  name: "engineering",
  openPositions: 20,
};

interface Splash {
  tag: string;
  imgUrl: string | StaticImageData;
}

type Profile = {
  name: string;
  ImageUrl: string | StaticImageData;
};

type Profiles = Profile & {
  time: number | string;
};

interface Trending {
  title: string;
  profile: Profiles;
  tag: string;
  content: string;
  likes: number;
  commentsCount: number;
}

interface Mentor extends Profile {
  role: string;
  country: string | StaticImageData;
  tags: string[];
}

export const jobData = [
  {
    image: "/company/google.png",
    company: "GOOGLE ",
    service: "Google search and other services",
    employees: "10-20",
    hiring: true,
    promoted: true,
    isDirectApply: true,
    offer: "UI/UX Designer",
    priceRange: "$100k - $300k",
    postDate: "2 MONTHS AGO",
  },
  {
    image: "/company/google.png",
    company: "GOOGLE ",
    service: "Google search and other services",
    employees: "10-20",
    hiring: true,
    promoted: true,
    isDirectApply: false,
    offer: "UI/UX Designer",
    priceRange: "$100k - $300k",
    postDate: "2 MONTHS AGO",
  },
];

export const teamData = [
  {
    name: "Jacob Jones",
    image: JacobImage,
    job: "Recruiter",
  },
  {
    name: "Cameron Williamson",
    image: CameronImage,
    job: "Recruiter",
  },
  {
    name: "Wade Warren",
    image: WadeImage,
    job: "Recruiter",
  },
  {
    name: "Robert Fox",
    image: RobertImage,
    job: "Recruiter",
  },
];

export const jobOpeningsData = [
  {
    image: "/company/standard.png",
    position: "Product Manager",
    name: "Pandascrow",
    duration: "Contract/Hybrid",
  },
  {
    image: "/company/standard.png",
    position: "Data Analyst",
    name: "Standard Chartered Bank Nigeria",
    duration: "Part time/Remote",
  },
  {
    image: "/company/standard.png",
    position: "Product Designer",
    name: "Standard Chartered Bank Nigeria",
    duration: "Full time/Remote",
  },
  {
    image: "/company/standard.png",
    position: "Network Analyst",
    name: "Hotels.ng",
    duration: "Contract/Hybrid",
  },
  {
    image: "/company/standard.png",
    position: "Security Engineer",
    name: "ALAT by Wema",
    duration: "Full time/Onsite",
  },
];

export const applicantsList = [
  {
    id: "jkl",
    name: "JMary Dekkoo",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Front End Developer",
    isSelected: false,
  },
  {
    id: "hjkl",
    name: "Jane Miysey",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Front End Developer",
    isSelected: false,
  },
  {
    id: "uikm",
    name: "JMary Dekkoo",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "DevOps Engineer",
    isSelected: false,
  },
  {
    id: "ghbnm",
    name: "Jane Heuwolo",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Backend Developer",
    isSelected: false,
  },
  {
    id: "oiuytrgh",
    name: "Hellen Miysey",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Front End Developer",
    isSelected: false,
  },
];

export const employerData = [
  {
    id: 1,
    title: "Afrisplash Remotely",
    desc: "The gateway to Africa s remote workforce: Africa s #1 remote work communityand largest open source remote work marketplace",
    inst: "Fintech",
    location: "Lagos, Nigeria",
    people: "12- 40 employees",
  },
  {
    id: 2,
    title: "Afrisplash Remotely",
    desc: "The gateway to Africa s remote workforce: Africa s #1 remote work communityand largest open source remote work marketplace",
    inst: "Fintech",
    location: "Lagos, Nigeria",
    people: "12- 40 employees",
  },
  {
    id: 3,
    title: "Afrisplash Remotely",
    desc: "The gateway to Africa s remote workforce: Africa s #1 remote work communityand largest open source remote work marketplace",
    inst: "Fintech",
    location: "Lagos, Nigeria",
    people: "12- 40 employees",
  },
  {
    id: 4,
    title: "Afrisplash Remotely",
    desc: "The gateway to Africa s remote workforce: Africa s #1 remote work communityand largest open source remote work marketplace",
    inst: "Fintech",
    location: "Lagos, Nigeria",
    people: "12- 40 employees",
  },
  {
    id: 5,
    title: "Afrisplash Remotely",
    desc: "The gateway to Africa s remote workforce: Africa s #1 remote work communityand largest open source remote work marketplace",
    inst: "Fintech",
    location: "Lagos, Nigeria",
    people: "12- 40 employees",
  },
  {
    id: 6,
    title: "Afrisplash Remotely",
    desc: "The gateway to Africa s remote workforce: Africa s #1 remote work communityand largest open source remote work marketplace",
    inst: "Fintech",
    location: "Lagos, Nigeria",
    people: "12- 40 employees",
  },
];

export const topTalentData = [
  {
    id: "eeevfd",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1606415918835-88d0614e75ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "eeewqd",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
  },
  {
    id: "eecd",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

export const mentorsData = [
  {
    id: "eeed",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1550833980-21742bcf7658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "efed",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "eefed",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1633068587533-ca4159e78e79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80",
  },
  {
    id: "eeedf",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "ewwed",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "eeevfd",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1606415918835-88d0614e75ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "eeewqd",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
  },
  {
    id: "eecd",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "eeqqd",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "eedg",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "eeedf",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "ewwed",
    name: "Mubarak Show",
    position: "Senior Developer",
    role: "Job search, Career, Leadership,...",
    flag: GhanaFlag,
    src: "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

export const trending: Trending[] = [
  {
    title: "New CSS Properties",
    profile: {
      name: "SeyiXR",
      ImageUrl: User,
      time: 12,
    },
    tag: "AMA",
    likes: 12,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident ratione molestias quam recusandae ullam inventore animi illo fuga eveniet? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, error dolor? Iusto dolorem in dolor, vel, rem eum soluta officia incidunt earum fugit illo quam harum repellat ullam nisi, aspernatur odio labore exercitationem molestias itaque. Vitae non magnam dolore cum.",
    commentsCount: 0,
  },
  {
    title: "Afrisplash Frontend UI",
    profile: {
      name: "SeyiXR",
      ImageUrl: User,
      time: 12,
    },
    tag: "AMA",
    likes: 12,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident ratione molestias quam recusandae ullam inventore animi illo fuga eveniet?",
    commentsCount: 3,
  },

  {
    title: "New CSS Properties",
    profile: {
      name: "SeyiXR",
      ImageUrl: User,
      time: 12,
    },
    tag: "AMA",
    likes: 12,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident ratione molestias quam recusandae ullam inventore animi illo fuga eveniet? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, error dolor? Iusto dolorem in dolor, vel, rem eum soluta officia incidunt earum fugit illo quam harum repellat ullam nisi, aspernatur odio labore exercitationem molestias itaque. Vitae non magnam dolore cum.",
    commentsCount: 0,
  },
  {
    title: "New CSS Properties",
    profile: {
      name: "SeyiXR",
      ImageUrl: User,
      time: 12,
    },
    tag: "AMA",
    likes: 12,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident ratione molestias quam recusandae ullam inventore animi illo fuga eveniet? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, error dolor? Iusto dolorem in dolor, vel, rem eum soluta officia incidunt earum fugit illo quam harum repellat ullam nisi, aspernatur odio labore exercitationem molestias itaque. Vitae non magnam dolore cum.",
    commentsCount: 0,
  },
];

export const splash: Splash[] = [
  {
    tag: "Content Writing",
    imgUrl: Image1,
  },
  {
    tag: "Web Design",
    imgUrl: Image2,
  },
  {
    tag: "Email marketing",
    imgUrl: Image3,
  },
  {
    tag: "Developer",
    imgUrl: Image4,
  },
  {
    tag: "Writer",
    imgUrl: Image5,
  },
  {
    tag: "Affiliate",
    imgUrl: Image3,
  },
  {
    tag: "Content Writing",
    imgUrl: Image4,
  },
  {
    tag: "Content Writing",
    imgUrl: Image5,
  },
  {
    tag: "Content Writing",
    imgUrl: Image3,
  },
  {
    tag: "Content Writing",
    imgUrl: Image4,
  },
  {
    tag: "Content Writing",
    imgUrl: Image5,
  },
];

export const mentors: Mentor[] = [
  {
    name: "Ben Jobs",
    ImageUrl: pic1,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Leadership", "Job Search", "Career", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic2,
    country: "Nigeria",
    role: "Full Stack Developer",
    tags: ["Career", "Job Search", "Leadership", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic3,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Skilled", "Job Search"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic4,
    country: "Togo",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic5,
    country: "Benin",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Skilled", "Job Search"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic6,
    country: "SA",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic7,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic8,
    country: "Madagascar",
    role: "Full Stack Developer",
    tags: ["Leadership", "Career", "Job Search"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic9,
    country: "Lorem",
    role: "Full Stack Developer",
    tags: ["Career", "Job Search", "Leadership"],
  },
];

export const coWorkingSpaceData = [
  {
    name: "Nairobi Garage",
    distance: "10",
    amount: "0.99",
    details: "Find new places to work, take a break, or even network. Get time off your daily commute and have your time back. ",
    src: workSpace1,
    id: 1
  },
  {
    name: "Nairobi Garage",
    distance: "20",
    amount: "0.99",
    details: "Find new places to work, take a break, or even network. Get time off your daily commute and have your time back. ",
    src: workSpace2,
    id: 2
  },
  {
    name: "Nairobi Garage",
    distance: "15",
    amount: "1.99",
    details: "Find new places to work, take a break, or even network. Get time off your daily commute and have your time back. ",
    src: workSpace3,
    id: 3
  },
  {
    name: "Nairobi Garage",
    distance: "30",
    amount: "2.99",
    details: "Find new places to work, take a break, or even network. Get time off your daily commute and have your time back. ",
    src: workSpace1,
    id: 4
  },
]

export const nearbyCardData = [
  {
    name: "Nairobi Garage",
    distance: "10",
    amount: "0.99",
    src: workSpace5,
    id: 1
  },
  {
    name: "Nairobi Garage",
    distance: "20",
    amount: "0.99",
    src: workSpace4,
    id: 2
  },
  {
    name: "Nairobi Garage",
    distance: "15",
    amount: "1.99",
    src: workSpace5,
    id: 3
  },
]

export const availableSpaceTabsData = [
  { id: 1, title: "ALL" },
  { id: 2, title: "PRIVATE DESK" },
  { id: 3, title: "DEDICATED DESK" },
  { id: 4, title: "SUITE" },
  { id: 5, title: "VIRTUAL OFFICE" },
];

export const availableSpacesTableData = [
  { id: 1, capacity: 4, duration: "1 Month", price: "$200", availability: "ENQUIRE" },
  { id: 2, capacity: 4, duration: "1 Month", price: "$200", availability: "ENQUIRE" },
  { id: 3, capacity: 4, duration: "1 Month", price: "$200", availability: "ENQUIRE" },
  { id: 4, capacity: 4, duration: "1 Month", price: "$200", availability: "ENQUIRE" },
  { id: 5, capacity: 4, duration: "1 Month", price: "$200", availability: "ENQUIRE" },
  { id: 6, capacity: 4, duration: "1 Month", price: "$200", availability: "ENQUIRE" },
];

export const businessHoursData = [
  {
    id: 1, day: "Monday",
    startTime: "09:00 AM",
    endTime: "06:00 PM",
  },
  {
    id: 2, day: "Tuesday",
    startTime: "09:00 AM",
    endTime: "06:00 PM",
  },
  {
    id: 3, day: "Wednesday",
    startTime: "09:00 AM",
    endTime: "06:00 PM",
  },
  {
    id: 4, day: "Thursday",
    startTime: "09:00 AM",
    endTime: "06:00 PM",
  },
  {
    id: 5, day: "Friday",
    startTime: "09:00 AM",
    endTime: "06:00 PM",
  },
  { id: 6, day: "Saturday", },
  { id: 7, day: "Sunday", },
];

export const facilitiesData = [
  { id: 1, value: "Kitchen", label: "Kitchen" },
  { id: 2, value: "personalLockers", label: "Personal Lockers" },
  { id: 3, value: "eventSpace", label: "Event Space" },
  { id: 4, value: "nearbyAirbnb", label: "Nearby Airbnb" },
];

export const classicBasicsData = [
  { id: 1, value: "highSpeedWIFI", label: "High-Speed WIFI" },
  { id: 2, value: "airConditioning", label: "Air Conditioning" },
];

export const relaxZonesData = [
  { id: 1, value: "loungeChillOutArea", label: "Lounge / Chill-out Area" },
  { id: 2, value: "outdoorTerrace", label: "Outdoor Terrace" },
  { id: 3, value: "napRoom", label: "Nap Room" },
];

export const cateringData = [
  { id: 1, value: "freeDrinkingWater", label: "Free Drinking Water" },
  { id: 2, value: "catteringKitchen", label: "Cattering Kitchen" },
  { id: 3, value: "snacksAvailable ", label: "Snacks Available " },
  { id: 4, value: "freeCoffee", label: "Free Coffee" },
  { id: 5, value: "freeTea", label: "Free Tea" },
  { id: 6, value: "outsiteCafe", label: "Outsite Cafe" },
];

export const equipmentData = [
  { id: 1, value: "dualSingleMonitors", label: "Dual / Single Monitors" },
  { id: 2, value: "printer", label: "Printer" },
  { id: 3, value: "scanner ", label: "Scanner" },
  { id: 4, value: "photocopier", label: "Photocopier" },
  { id: 5, value: "computersWindows", label: "Computers (Windows)" },
  { id: 6, value: "computersMacs", label: "Computers (Macs)" },
  { id: 6, value: "ergonomicChairs", label: "Ergonomic Chairs" },
];
type ProfileT = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  job: {
    title: string;
    company: string;
    category: string;
  };
  skills: string[];
  languages: {
    name: string;
    level: string;
  }[];
};

export const userProfile: ProfileT = {
  fullName: "Adaeze Ruby",
  email: "someone@email.com",
  phone: "09087654321",
  location: "Lagos, Nigeria",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus tempor nec venenatis, dolor. Et vestibulum massa leo erat adipiscing nunc pulvinar. ",
  job: {
    title: "Product Designer",
    company: "Afrisplash",
    category: "Full Time",
  },
  skills: ["Design", "Tech", "UI/UX"],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Advanced" },
  ],
};

type JobExpT = {
  title: string;
  company: string;
  duration: string;
  jobDesc: string;
};

export const userExperience: JobExpT[] = [
  {
    title: "UI/UX Designer",
    company: "Microsoft",
    duration: "2008 - 2010",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Product Designer",
    company: "Versuspay",
    duration: "2016- 2018",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Product Designer",
    company: "Afrisplash",
    duration: "2020 - Present",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

type UserEducationT = {
  title: string;
  company: string;
  duration: string;
  jobDesc: string;
};

export const userEducation: UserEducationT[] = [
  {
    title: "Agba Designer",
    company: "Open Classrooms",
    duration: "2020 - Present",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "UI/UX Designer",
    company: "ATBU Bauchi",
    duration: "2020 - Present",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "UI/UX Designer",
    company: "Youtube Design School",
    duration: "2020 - Present",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "UI/UX Designer",
    company: "Harvard Design School",
    duration: "2020 - Present",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export const fieldsOfStudy = [
  "Computer Science",
  "Engineering",
  "Mathematics",
  "Physics",
  "Biology",
  "Chemistry",
  "Psychology",
  "Sociology",
  "Business Administration",
  // Add more fields as needed
];

export const techJobTypes = [
  "Software Developer",
  "Web Developer",
  "Mobile App Developer",
  "Data Scientist",
  "Data Analyst",
  "Database Administrator",
  "Network Engineer",
  "Systems Analyst",
  "UI/UX Designer",
  "DevOps Engineer",
  "QA Engineer",
  "Cybersecurity Analyst",
  "Cloud Architect",

];

export const countryCodes = [
  { label: '+93', value: '+93' },    // Afghanistan
  { label: '+355', value: '+355' },  // Albania
  { label: '+213', value: '+213' },  // Algeria
  { label: '+376', value: '+376' },  // Andorra
  { label: '+244', value: '+244' },  // Angola
  { label: '+1-268', value: '+1-268' }, // Antigua and Barbuda
  { label: '+54', value: '+54' },    // Argentina
  { label: '+374', value: '+374' },  // Armenia
  { label: '+61', value: '+61' },    // Australia
  { label: '+43', value: '+43' },    // Austria
  { label: '+994', value: '+994' },  // Azerbaijan
  { label: '+1-242', value: '+1-242' }, // Bahamas
  { label: '+973', value: '+973' },  // Bahrain
  { label: '+880', value: '+880' },  // Bangladesh
  { label: '+1-246', value: '+1-246' }, // Barbados
  { label: '+375', value: '+375' },  // Belarus
  { label: '+32', value: '+32' },    // Belgium
  { label: '+501', value: '+501' },  // Belize
  { label: '+229', value: '+229' },  // Benin
  { label: '+975', value: '+975' },  // Bhutan
  { label: '+591', value: '+591' },  // Bolivia
  { label: '+387', value: '+387' },  // Bosnia and Herzegovina
  { label: '+267', value: '+267' },  // Botswana
  { label: '+55', value: '+55' },    // Brazil
  { label: '+673', value: '+673' },  // Brunei Darussalam
  { label: '+359', value: '+359' },  // Bulgaria
  { label: '+226', value: '+226' },  // Burkina Faso
  { label: '+257', value: '+257' },  // Burundi
  { label: '+238', value: '+238' },  // Cabo Verde
  { label: '+855', value: '+855' },  // Cambodia
  { label: '+237', value: '+237' },  // Cameroon
  { label: '+1', value: '+1' },      // Canada
  { label: '+236', value: '+236' },  // Central African Republic
  { label: '+235', value: '+235' },  // Chad
  { label: '+56', value: '+56' },    // Chile
  { label: '+86', value: '+86' },    // China
  { label: '+57', value: '+57' },    // Colombia
  { label: '+269', value: '+269' },  // Comoros
  { label: '+243', value: '+243' },  // Congo, Democratic Republic of the
  { label: '+242', value: '+242' },  // Congo, Republic of the
  { label: '+506', value: '+506' },  // Costa Rica
  { label: '+385', value: '+385' },  // Croatia
  { label: '+53', value: '+53' },    // Cuba
  { label: '+357', value: '+357' },  // Cyprus
  { label: '+420', value: '+420' },  // Czech Republic
  { label: '+45', value: '+45' },    // Denmark
  { label: '+253', value: '+253' },  // Djibouti
  { label: '+1-767', value: '+1-767' }, // Dominica
  { label: '+1-809', value: '+1-809' }, // Dominican Republic
  { label: '+593', value: '+593' },  // Ecuador
  { label: '+20', value: '+20' },    // Egypt
  { label: '+503', value: '+503' },  // El Salvador
  { label: '+240', value: '+240' },  // Equatorial Guinea
  { label: '+291', value: '+291' },  // Eritrea
  { label: '+372', value: '+372' },  // Estonia
  { label: '+268', value: '+268' },  // Eswatini
  { label: '+251', value: '+251' },  // Ethiopia
  { label: '+679', value: '+679' },  // Fiji
  { label: '+358', value: '+358' },  // Finland
  { label: '+33', value: '+33' },    // France
  { label: '+241', value: '+241' },  // Gabon
  { label: '+220', value: '+220' },  // Gambia
  { label: '+995', value: '+995' },  // Georgia
  { label: '+49', value: '+49' },    // Germany
  { label: '+233', value: '+233' },  // Ghana
  { label: '+30', value: '+30' },    // Greece
  { label: '+1-473', value: '+1-473' }, // Grenada
  { label: '+502', value: '+502' },  // Guatemala
  { label: '+224', value: '+224' },  // Guinea
  { label: '+245', value: '+245' },  // Guinea-Bissau
  { label: '+592', value: '+592' },  // Guyana
  { label: '+509', value: '+509' },  // Haiti
  { label: '+504', value: '+504' },  // Honduras
  { label: '+36', value: '+36' },    // Hungary
  { label: '+354', value: '+354' },  // Iceland
  { label: '+91', value: '+91' },    // India
  { label: '+62', value: '+62' },    // Indonesia
  { label: '+98', value: '+98' },    // Iran
  { label: '+964', value: '+964' },  // Iraq
  { label: '+353', value: '+353' },  // Ireland
  { label: '+972', value: '+972' },  // Israel
  { label: '+39', value: '+39' },    // Italy
  { label: '+1-876', value: '+1-876' }, // Jamaica
  { label: '+81', value: '+81' },    // Japan
  { label: '+962', value: '+962' },  // Jordan
  { label: '+7', value: '+7' },      // Kazakhstan
  { label: '+254', value: '+254' },  // Kenya
  { label: '+686', value: '+686' },  // Kiribati
  { label: '+850', value: '+850' },  // Korea, North
  { label: '+82', value: '+82' },    // Korea, South
  { label: '+965', value: '+965' },  // Kuwait
  { label: '+996', value: '+996' },  // Kyrgyzstan
  { label: '+856', value: '+856' },  // Laos
  { label: '+371', value: '+371' },  // Latvia
  { label: '+961', value: '+961' },  // Lebanon
  { label: '+266', value: '+266' },  // Lesotho
  { label: '+231', value: '+231' },  // Liberia
  { label: '+218', value: '+218' },  // Libya
  { label: '+423', value: '+423' },  // Liechtenstein
  { label: '+370', value: '+370' },  // Lithuania
  { label: '+352', value: '+352' },  // Luxembourg
  { label: '+261', value: '+261' },  // Madagascar
  { label: '+265', value: '+265' },  // Malawi
  { label: '+60', value: '+60' },    // Malaysia
  { label: '+960', value: '+960' },  // Maldives
  { label: '+223', value: '+223' },  // Mali
  { label: '+356', value: '+356' },  // Malta
  { label: '+692', value: '+692' },  // Marshall Islands
  { label: '+222', value: '+222' },  // Mauritania
  { label: '+230', value: '+230' },  // Mauritius
  { label: '+52', value: '+52' },    // Mexico
  { label: '+691', value: '+691' },  // Micronesia
  { label: '+373', value: '+373' },  // Moldova
  { label: '+377', value: '+377' },
]
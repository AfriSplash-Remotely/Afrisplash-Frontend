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
    employees: "10-20  EMPLOYEES",
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
    employees: "10-20  EMPLOYEES",
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
  },
  {
    name: "Nairobi Garage",
    distance: "20",
    amount: "0.99",
    details: "Find new places to work, take a break, or even network. Get time off your daily commute and have your time back. ",
    src: workSpace2,
  },
  {
    name: "Nairobi Garage",
    distance: "15",
    amount: "1.99",
    details: "Find new places to work, take a break, or even network. Get time off your daily commute and have your time back. ",
    src: workSpace3,
  },
  {
    name: "Nairobi Garage",
    distance: "30",
    amount: "2.99",
    details: "Find new places to work, take a break, or even network. Get time off your daily commute and have your time back. ",
    src: workSpace1,
  },
]

export const nearbyCardData = [
  {
    name: "Nairobi Garage",
    distance: "10",
    amount: "0.99",
    src: workSpace5,
  },
  {
    name: "Nairobi Garage",
    distance: "20",
    amount: "0.99",
    src: workSpace4,
  },
  {
    name: "Nairobi Garage",
    distance: "15",
    amount: "1.99",
    src: workSpace5,
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
    { id: 1, day: "Monday",
      startTime: "09:00 AM",
      endTime: "06:00 PM", },
    { id: 2, day: "Tuesday",
      startTime: "09:00 AM",
      endTime: "06:00 PM", },
    { id: 3, day: "Wednesday",
      startTime: "09:00 AM",
      endTime: "06:00 PM", },
    { id: 4, day: "Thursday",
      startTime: "09:00 AM",
      endTime: "06:00 PM", },
    { id: 5, day: "Friday",
      startTime: "09:00 AM",
      endTime: "06:00 PM", },
    { id: 6, day: "Saturday",},
      { id: 7, day: "Sunday",},
  ];

   export const facilitiesData = [
    { id: 1, value: "Kitchen", label:  "Kitchen"},
    { id: 2, value: "personalLockers", label:  "Personal Lockers"},
    { id: 3, value: "eventSpace", label:  "Event Space" },
    { id: 4, value: "nearbyAirbnb", label:  "Nearby Airbnb"},
  ]; 

   export const classicBasicsData = [
    { id: 1, value: "highSpeedWIFI", label:  "High-Speed WIFI"},
    { id: 2, value: "airConditioning", label:  "Air Conditioning"},
  ];

  export const relaxZonesData = [
    { id: 1, value: "loungeChillOutArea", label:  "Lounge / Chill-out Area"},
    { id: 2, value: "outdoorTerrace", label:  "Outdoor Terrace"},
    { id: 3, value: "napRoom", label:  "Nap Room" },
  ]; 

   export const cateringData = [
    { id: 1, value: "freeDrinkingWater", label:  "Free Drinking Water"},
    { id: 2, value: "catteringKitchen", label:  "Cattering Kitchen"},
    { id: 3, value: "snacksAvailable ", label:  "Snacks Available " },
    { id: 4, value: "freeCoffee", label:  "Free Coffee"},
    { id: 5, value: "freeTea", label:  "Free Tea"},
    { id: 6, value: "outsiteCafe", label:  "Outsite Cafe"},
  ];

  export const equipmentData = [
    { id: 1, value: "dualSingleMonitors", label:  "Dual / Single Monitors"},
    { id: 2, value: "printer", label:  "Printer"},
    { id: 3, value: "scanner ", label:  "Scanner" },
    { id: 4, value: "photocopier", label:  "Photocopier"},
    { id: 5, value: "computersWindows", label:  "Computers (Windows)"},
    { id: 6, value: "computersMacs", label:  "Computers (Macs)"},
    { id: 6, value: "ergonomicChairs", label:  "Ergonomic Chairs"},
  ];
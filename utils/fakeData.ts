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
import CameronImage from "assets/teams/cameron.png";
import JacobImage from "assets/teams/jacob.png";
import RobertImage from "assets/teams/robert.png";
import WadeImage from "assets/teams/wade.png";

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

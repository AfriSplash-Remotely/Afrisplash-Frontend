import { StaticImageData } from "next/image";
import User from "assets/admin_avatars/admin_avatar.svg";
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

export const jobOpeneingsData = [
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
    tags: ["Career", "Leadership", "Job Search", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic2,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic3,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic4,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic5,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search", "Skilled"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic6,
    country: "Ghana",
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
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search"],
  },
  {
    name: "Ben Jobs",
    ImageUrl: pic9,
    country: "Ghana",
    role: "Full Stack Developer",
    tags: ["Career", "Leadership", "Job Search"],
  },
];

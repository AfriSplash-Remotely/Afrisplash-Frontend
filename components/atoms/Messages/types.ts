import { StaticImageData } from "next/image";

export interface MessageDataType {
  fullName: string;
  profession: string;
  profileImage: StaticImageData;
  time: string;
  content: string;
  status: string;
}

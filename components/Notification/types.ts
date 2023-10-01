import { StaticImageData } from "next/image";

export interface NotificationDataType {
  fullName: string;
  profession: string;
  profileImage: StaticImageData;
  time: string;
  content: string;
}

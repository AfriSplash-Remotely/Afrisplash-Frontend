export interface responseMessage {
  success: boolean;
  data: string;
}


export interface AccountSettings {
  lastName: string;
  firstName: string;
  location: string;
  phone: string;
  email: string;
  profileImg: object;
}

import * as yup from "yup"


export const ApplyJobSchema = yup.object().shape({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup.string().email().required("email is required"),
    jobTitle: yup.string(),
    country: yup.string().required("country is required"),
    phoneNumber: yup.string().required("phone number is required"),
    resumeURL: yup.string().required("resume is required"),
})


export type ApplyJobSchema = yup.InferType<typeof ApplyJobSchema>
import * as yup from "yup"


export const ApplyJobSchema = yup.object().shape({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup.string().email().required("email is required"),
    jobTitle: yup.string(),
    country: yup.string().required("country is required"),
    countryCode: yup.string().required("country code is required"),
    phone: yup.string().required("phone number is required"),
    resume: yup.string().required("resume is required")

})


export type ApplyJobSchema = yup.InferType<typeof ApplyJobSchema>
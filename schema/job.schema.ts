import * as yup from "yup"

export const CreateJobSchema = {
  stepOne:yup.object().shape({
    jobTitle:yup.string().required('Job Title is required'),
    jobIndustry:yup.string().required('Job Industry is required'),
    jobDescribtion:yup.string().required('Job Describtion is required')
  }),
  stepTwo:yup.object().shape({
    requirement: yup.string().required('Job Requirement is required'),
    experience: yup.string().required('Experience level is required'),
    jobType:yup.string().required('Job Type is required'),
    benefits:yup.string().required('Benefits is required'),
  
  }),
  stepThree:yup.object().shape({
    title:yup.string().required('Job Title is required'),
    gender:yup.string().required('Gender is required'),
    salary:yup.string().required('Salary is required'),
    paymentPeriod:yup.string().required('Payment Period is required')
  })
}
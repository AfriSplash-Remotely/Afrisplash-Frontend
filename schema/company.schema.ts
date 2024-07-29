import * as yup from "yup"


export const CreateCompanySchema = {
    stepOne: yup.object().shape({
        name: yup.string().required('Company name is required'),
        industry: yup.string().required('Job Industry is required'),
        description: yup.string().required('Job Describtion is required'),
        website: yup.string().required('Website is required'),
        location: yup.string().required('Location is required'),
        role: yup.string().required('Role is required'),
     
        "one_Line_Pitch": yup.string().required('Picth  is required'),
        "company_email": yup.string().required('Company Email is required'),
        "company_phone": yup.string().required('Company Phone is required'),
        "staff": yup.number().required('Staffs is required'),
        
    }),

   
}


export type StepOne = yup.InferType<(typeof CreateCompanySchema)['stepOne']>


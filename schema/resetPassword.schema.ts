import * as yup from "yup"

export const ResetPasswordSchema = yup.object().shape({
    currentPassword : yup.string().required("Current Password is required"),
    newPassword: yup.string().required("New Password is required"),
    confirmPassword: yup
        .string()
        .required("Confirm New Password")
        .oneOf([yup.ref("newPassword")], "Passwords must match"),
})


export type ResetPasswordSchema = yup.InferType<typeof ResetPasswordSchema>
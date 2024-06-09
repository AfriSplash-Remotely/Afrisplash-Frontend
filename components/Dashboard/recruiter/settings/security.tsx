import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { changePassword } from '@/api-endpoints/auth/auth.api';
import SettingsLayout from '@/layouts/settingsLayout';
import { ResetPasswordSchema } from '@/schema/resetPassword.schema';

const Security = (): JSX.Element => {
 const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordSchema>({
    resolver: yupResolver(ResetPasswordSchema)
  })

  const { mutate, isLoading } = useMutation(changePassword, {
    onSuccess: (data) => {
      toast.success(data?.message)
      router.push("/auth/login")
    },
    onError: (error: any) => {
      toast.error(error?.message)
    }
  })

  const onSubmit = (data: ResetPasswordSchema) => {
    const payloadObject = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword
    }
    mutate(payloadObject)
  }


  return (
    <SettingsLayout>
      <div className={`w-full bg-white rounded-xl p-4 md:p-12 `}>
        <h3 className={`text-dark_text pb-3.5 text-lg font-medium`}>
          Security
        </h3>
        <p className={`text-dark_text opacity-[.52] text-[14px] pb-[21px]`}>
          Change or reset your password.
        </p>
        <form className={`pb-[53px]`} onSubmit={handleSubmit(onSubmit)}>
          <div className={`flex flex-col mb-[22px]`}>
            <label className={`text-dark_text text-[14px]  font-normal  pb-[6px]`}>
              Current Password
            </label>
            <input
              type="password"
              className={`border border-solid border-checkBox_bg w-full md:w-[302px]  rounded-lg  h-[46px]`}
              {...register("currentPassword")}
            />
            {errors.currentPassword && (
              <p className='error_message pl-2 py-2'>{errors.currentPassword.message}</p>
            )}
          </div>
          <div className={`flex flex-col mb-[22px]`}>
            <label className={`text-dark_text text-[14px]  font-normal  pb-[6px]`}>
              New Password
            </label>
            <input
              type="password"
              className={`border border-solid border-checkBox_bg w-full md:w-[302px]  rounded-lg  h-[46px]`}
              {...register("newPassword")}
            />
            {errors.newPassword && (
              <p className='error_message pl-2 py-2'>{errors.newPassword.message}</p>
            )}
          </div>
          <div className={`flex flex-col`}>
            <label className={`text-dark_text text-[14px]  font-normal  pb-[6px]`}>
              Confirm New Password
            </label>
            <input
              type="password"
              className={`border border-solid border-checkBox_bg w-full md:w-[302px]  rounded-lg  h-[46px]`}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className='error_message pl-2 py-2'>{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className={`flex flex-row gap-6 py-8`}>
            <button
              type='submit'
              className={`border-0 rounded-lg text-[15px] font-light text-white bg-primary_green py-2 px-6`}
            >
              {isLoading ? "Changing Password..." : "Change Password"}
            </button>

            <Link href={"/dashboard"}>
              <button
                className={`border border-solid border-primary_green rounded-lg text-primary_green py-2 px-6`}
              >
                Discard
              </button>
            </Link>
          </div>
        </form>
      </div>
    </SettingsLayout>
  );
}

export default Security
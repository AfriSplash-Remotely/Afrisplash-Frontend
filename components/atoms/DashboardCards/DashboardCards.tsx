import React from 'react'
import PropTypes, { InferProps } from "prop-types";

const CardProps = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  total: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired
}
export default function DashboardCards({ title, icon, total, bgColor }: InferProps<typeof CardProps>): JSX.Element {
  return (
    <div className='flex items-center gap-6 p-6 rounded-md' style={{ backgroundColor: bgColor }}>
      <div className='h-24 w-24 text-grey_4  rounded-full flex justify-center items-center'>
        {icon}
      </div>
      <div>
        <p className='text-dark_black font-medium text-lg'>{title}</p>
        <h3 className='text-dark_black text-4xl font-semibold'>{total}</h3>

      </div>
    </div>
  )
}

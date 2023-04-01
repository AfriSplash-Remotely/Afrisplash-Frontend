import React from "react";
import styles from "./Filter.module.scss";
import PropTypes, { InferProps } from "prop-types";


const FilterProps ={
  defaultValue: PropTypes.string.isRequired,
  options:PropTypes.arrayOf(PropTypes.string)

}

const Filter  = ({options, defaultValue} :InferProps<typeof FilterProps>):JSX.Element => {
  return (
    <>
      <div className={`${styles.select}`}>
       <select
         name={defaultValue}
         id="filter"
         defaultValue={defaultValue}
         className="py-[13px] px-5 rounded-md bg-white border-[1.6px] border-[#9b9a9a]">
         <option value={defaultValue} hidden>
           {defaultValue}
         </option>
         {options?.map((opt) => {
           return (
             <option key={opt} value={opt} className="font-normal">
               {opt}
             </option>
           );
         })}
       </select>
     </div>
    </>
  )
}


export default Filter;
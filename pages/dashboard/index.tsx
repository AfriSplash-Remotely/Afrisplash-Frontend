import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import AdminLayout from "layouts/adminLayout";;
import EditIcon from "assets/admin_icons/edit-2.svg";

// const positions = [
//   {
//     id: "lkjhg",
//     company: "Microsoft",
//     year: "2016- 2018",
//     jobTitle: "UI/UX Designer",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//   },
// ];
// const ProfileCardHeaderProps = {
//   title: PropTypes.string.isRequired,
// };
// function ProfileCardHeader({
//   title,
// }: InferProps<typeof ProfileCardHeaderProps>): JSX.Element {
//   return (
//     <div className="flex w-full items-center mb-4">
//       <p className="text-lg font-bold w-full mx-1">{title}</p>
//       <div className="w-6 h-6">
//         <div className="flex items-center justify-center flex-1 h-full p-1 border rounded-lg border-gray-400">
//           <div className="flex-1 h-6 w-6 relative rounded-full">
//             <Image src={EditIcon} alt="edit-icon" aria-hidden="true" fill />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const Blog: NextPage = () => {
  return (
    <AdminLayout> Dashboard </AdminLayout>
  );
};

export default Blog;

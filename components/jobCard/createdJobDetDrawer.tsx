import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MdClose } from "react-icons/md";

type DrawerProps = {
  title?: string;
  industry: string;
  experience: string;
  type: string;
  description: string;
  location: string;
  benefit: string;
  requirement: string;
  isOpen: boolean;
  salary: any,
  expiry: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreatedJobDetDrawer({
  title,
  industry,
  description,
  requirement,
  type,
  experience,
  benefit,
  salary,
  location,
  isOpen,
  expiry,
  setIsOpen,
}: DrawerProps): JSX.Element {
  return (
    <Transition show={isOpen} as={Fragment}>
    <Dialog
        unmount={false}
      onClose={() => setIsOpen(false)}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="flex h-screen">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            entered="opacity-30"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="z-40 fixed inset-0 bg-black bg-opacity-50  w-3/4" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-linear duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-linear duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >

        <div className={`z-50 flex flex-col justify-between bg-white_2 w-3/4 max-w-lg py-8 px-6 overflow-hidden text-left shadow-xl ml-auto`}>
          <div>
            <Dialog.Title className="float-right" >
              <div>
                <MdClose className="text-gray text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              </div>
            </Dialog.Title>
            <Dialog.Description className='py-6 space-y-2'>
              <h1 className="font-bold text-3xl capitalize text-sunglow">{title}</h1>
              <div className="flex items-center gap-4 py-2">
                <div className="bg-amber-500/20 py-1 px-4 rounded-full text-xs text-primary_green font-medium">{industry}</div>
                <div className="bg-secondary_yellow_2 py-1 px-4 rounded-full text-xs text-dark font-medium">{experience}</div>
                <div className="bg-primary_green py-1 px-4 rounded-full text-xs text-white font-medium">{type}</div>
              </div>

              <div className="py-4 space-y-2">
                <p className="text-base">Location: <span className="text-primary_green font-semibold">{location}</span></p>
                <p className="text-base">Salary: <span className="text-primary_green font-semibold">{salary}</span></p>
                <p className="text-base">Expires: <span className="text-primary_green font-semibold">{new Date(expiry as string).toDateString()}</span></p>
              </div>

              <div className="space-y-2 py-4">
                <h3 className="font-semibold text-lg">Description</h3>
                <p className="text-base text-dark">
                  {description}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Requirement</h3>
                <p className="text-base text-dark">
                  {requirement}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Benefit</h3>
                <p className="text-base text-dark">
                  {benefit}
                </p>
              </div>
            </Dialog.Description>
          </div>
        </div>
          </Transition.Child>
      </div>
    </Dialog>
    </Transition>
  );
}

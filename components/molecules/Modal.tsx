import React, { PropsWithChildren } from "react";

export type ModalT = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode
} & PropsWithChildren

export default function Modal({
  open,
  onClose,
  children
}: ModalT): JSX.Element {
  return (
    <>
      {open ? (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4- pb-20- text-center">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-black opacity-60"
                onClick={onClose}
              ></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
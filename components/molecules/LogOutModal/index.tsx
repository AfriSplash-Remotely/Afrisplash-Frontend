import React from 'react'
import Modal from '@/components/atoms/Modal/Modal'
import Button from '@/components/atoms/Button/Button';

interface LogOutModalProps {
  open: boolean;
  loading: boolean;
  onClose: () => void;
  onLogOut: () => void;
}

export default function LogOutModal({ open, onClose, onLogOut, loading }: LogOutModalProps): JSX.Element {
  return (
    <Modal isOpen={open} setIsOpen={onClose} dialogPanelClass="w-2xl max-w-xl">
      <div className='flex flex-col justify-center items-center py-8'>
        <div className='space-y-4'>
          <h2 className='text-lg md:text-2xl font-bold text-primary_green text-center'>Are you sure you want to log out?</h2>
          <p className='text-sm md:text-lg text-center'>You're about to be logged out. Remember,your profile and application history are always available when you log back in.</p>
        </div>

        <div className='mt-8 flex justify-between items-center gap-8 '>
          <Button
            onClick={onClose}
            classes={
              "border border-solid text-sm border-primary_green px-6 md:px-12 py-2 rounded-lg  w-1/2  md:w-auto"
            }
          >
            <span className="flex gap-4 mx-auto item-center justify-center font-bold">Cancel</span>
          </Button>

          <Button
            onClick={onLogOut}
            classes={
              "bg-primary_green text-sm text-white px-6 md:px-12 py-2 rounded-lg w-1/2  md:w-auto"
            }
          >
            <span className="flex gap-4 mx-auto item-center justify-center font-bold">{loading ? 'Loging Out ...' : 'Logout'}</span>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

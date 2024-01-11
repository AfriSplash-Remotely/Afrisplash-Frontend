import React from 'react'
import Modal from '../atoms/Modal/Modal'

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
}


const JobApplicationModal: React.FC<ApplyModalProps> = ({ open, onClose }) => {
  return (
    <Modal isOpen={open} setIsOpen={onClose} dialogPanelClass="w-2xl max-w-2xl"
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error ullam eos ratione. Veniam numquam similique, officia exercitationem explicabo aut quisquam doloribus blanditiis voluptatibus repudiandae eveniet magnam in. Voluptatibus, natus?
      </div>


    </Modal>
  )
}


export default JobApplicationModal
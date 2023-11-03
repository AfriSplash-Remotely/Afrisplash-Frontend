import React from "react";
import { AnimatePresence } from "framer-motion";
import NotificationContent from "./NotificationSlideOverContent";
import PropTypes, { InferProps } from "prop-types";

const Props = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function Notification({
  isOpen,
  onClose,
}: InferProps<typeof Props>): JSX.Element {
  return (
    <AnimatePresence>
      {isOpen && <NotificationContent onClose={onClose} />}
    </AnimatePresence>
  );
}

export default Notification;

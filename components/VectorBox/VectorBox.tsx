import React from "react";
import Image from "next/image";
import Mailbox from "assets/authentication/Mailbox.png";

function VectorBox():JSX.Element {
  return (
    <div className="max-w-[271.02px] w-full h-56 mt-32 mr-auto ml-auto">
      <Image
        className="max-w-full h-auto ml-auto"
        src={Mailbox}
        alt="Mailbox.png"
        fill
      />
    </div>
  );
}

export default VectorBox;

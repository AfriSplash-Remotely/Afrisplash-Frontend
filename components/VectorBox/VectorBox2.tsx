import React from "react";
import Image from "next/image";
import Letter from "assets/authentication/Letter.png";

function VectorBox2() {
  return (
    <div className="max-w-[271.02px] w-full h-56 mt-32 mr-auto ml-auto">
      <Image
        className="max-w-full h-auto ml-auto"
        src={Letter}
        alt="Letter.png"
      />
    </div>
  );
}

export default VectorBox2;

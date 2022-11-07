import React from "react";
import EmailVerified from "components/EmailVerified/EmailVerified";
import Logo from "components/Logo/Logo";
import VectorBox2 from "components/VectorBox/VectorBox2";

function EmailVerifiedPage() {
  return (
    <div className="p-1">
      <div className="max-w-[1440px] h-[1027px] bg-[#FFF] mr-auto ml-auto">
        <div className="w-fit mr-auto ml-auto">
          <Logo />
        </div>
        <div className="max-w-[660px] h-[739px] l-[320px] bg-[#fff] md:shadow-[4px_4px_32px_rgba(0,0,0,0.1)] md:backdrop-opacity-20 rounded-[24px] w-full mt-12 flex box-border mr-auto ml-auto">
          <div className="p-1">
            <VectorBox2 /> <EmailVerified />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerifiedPage;

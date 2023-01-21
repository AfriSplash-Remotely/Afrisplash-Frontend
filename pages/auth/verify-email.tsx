import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Logo from "components/Logo/Logo";
import VectorBox from "components/VectorBox/VectorBox";
import VerifyEmail from "components/VerifyEmail/VerifyEmail";

function VerifyEmailPage() {
  return (
    <div className="p-1 bg-[#FFF] w-full h-full">
      <div className="w-fit mx-auto">
        <Logo />
      </div>
      <div className="py-8">
        <div className="max-w-[560px] h-auto bg-[#fff] md:shadow-[4px_4px_32px_rgba(0,0,0,0.1)] md:backdrop-opacity-20 rounded-[24px] w-full mx-auto">
          <div className="p-2 md:p-2">
            <div className="bg-[#D9DEDC] h-8 w-8 ml-5 mt-5 rounded-[50%]">
              <ArrowLeftIcon className="pt-[0.4rem] pl-[.35rem] w-6 h-6" />
            </div>
          </div>
          <VectorBox /> <VerifyEmail />
        </div>
      </div>
    </div>
  );
}

export default VerifyEmailPage;

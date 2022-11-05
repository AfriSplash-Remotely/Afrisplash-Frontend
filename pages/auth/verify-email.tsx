import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Logo from "components/Logo/Logo";
import VectorBox from "components/VectorBox/VectorBox";
import VerifyEmail from "components/VerifyEmail/VerifyEmail";

function App() {
  return (
    <>
      {" "}
      <Head>
        {" "}
        <title>Afrisplash</title>{" "}
        <meta name="description" content="Verify email page" />{" "}
      </Head>{" "}
      <body className="max-w-[1440px] h-[1027px] bg-[#FFF] mr-auto ml-auto">
        {" "}
        <div className="w-full flex flex-row flex-wrap mr-auto ml-auto">
          {" "}
          <Logo />{" "}
        </div>{" "}
        <div className="max-w-[660px] h-[739px] l-[320px] bg-[#fff] shadow-[4px_4px_32px_rgba(0,0,0,0.1)] backdrop-opacity-20 rounded-[24px] w-full mt-12 flex box-border mr-auto ml-auto">
          {" "}
          <div className="bg-gray-400 h-8 w-8 ml-5 mt-5 absolute rounded-[50%]">
            {" "}
            <ArrowLeftIcon className="pt-1 pl-1 w-6 h-6" />{" "}
          </div>{" "}
          <VectorBox /> <VerifyEmail />{" "}
        </div>{" "}
      </body>{" "}
    </>
  );
}

export default App;

import Head from "next/head";
import EmailVerified from "components/EmailVerified/EmailVerified";
import Logo from "components/Logo/Logo";
import VectorBox2 from "components/VectorBox/VectorBox2";

function App() {
  return (
    <>
      {" "}
      <Head>
        {" "}
        <title>Afrisplash</title>{" "}
        <meta name="description" content="Email verified page" />{" "}
      </Head>{" "}
      <body className="max-w-[1440px] h-[1027px] bg-[#FFF] mr-auto ml-auto">
        {" "}
        <div className="w-full flex flex-row flex-wrap mr-auto ml-auto">
          {" "}
          <Logo />{" "}
        </div>{" "}
        <div className="max-w-[660px] h-[739px] l-[320px] bg-[#fff] shadow-[4px_4px_32px_rgba(0,0,0,0.1)] backdrop-opacity-20 rounded-[24px] w-full mt-12 flex box-border mr-auto ml-auto">
          {" "}
          <VectorBox2 /> <EmailVerified />{" "}
        </div>{" "}
      </body>{" "}
    </>
  );
}

export default App;

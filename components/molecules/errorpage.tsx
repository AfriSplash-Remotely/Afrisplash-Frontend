import Link from "next/link";

import Image from "next/image";

import errorPage from "../../assets/authentication/error-page.svg";
import GeneralLayout from "layouts/generalLayout";

type ErrorMessage = Record<
  number,
  {
    errorTitle?: String;
    errorMessage: String;
    errorMessageTwo?: String;
  }
>;

const ErrorPage = (props: { statusCode: number }) => {
  const statusCode = props.statusCode;

  const errorMessages: ErrorMessage = {
    404: {
      errorTitle: "",
      errorMessage:
        "It's a 404. Unfortunately we couldn't find what you're looking for.",
    },
    405: {
      errorTitle: "Uhmm....",
      errorMessage:
        "We couldn't find the page you're looking for. It's either the link is broken or the page has been moved",
    },
  };

  const errorMessageToShow = errorMessages[statusCode];

  return (
    <GeneralLayout>
      <div className=" mx-10">
        <div className="flex flex-col items-center py-20">
          <div className="items-center">
            <Image
              src={errorPage}
              alt="google photo"
              className="items-center"
            />
          </div>
          <div className="w-full flex flex-col text-center w-10/12 lg:w-6/12">
            <p className="text-2xl my-5">{errorMessageToShow.errorTitle}</p>
            <p className="">{errorMessageToShow.errorMessage}</p>
          </div>
          <Link href="/">
            <button className="border-primary_green border rounded-md text-primary_green w-10/12 md:w-7/12 lg:w-4/12 p-4 mt-5">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default ErrorPage;

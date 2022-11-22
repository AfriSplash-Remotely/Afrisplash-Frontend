import ErrorPage from "components/molecules/errorpage";
import React from "react";

const NotFound = () => {
  return <ErrorPage statusCode={405} />;
};

export default NotFound;

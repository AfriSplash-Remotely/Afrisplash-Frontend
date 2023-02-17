import React from "react";
import ErrorPage from "components/molecules/errorpage";

const NotFound = () => {
  return <ErrorPage statusCode={405} />;
};

export default NotFound;

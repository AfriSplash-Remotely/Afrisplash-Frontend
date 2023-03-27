import React from "react";
import ErrorPage from "components/molecules/errorpage";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return <ErrorPage statusCode={405} />;
};

export default NotFound;

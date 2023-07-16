/* eslint-disable react/prop-types */
import { NextPage } from "next";
import { useRouter } from "next/router";
import PropTypes, { InferProps } from "prop-types";
import Footer from "components/molecules/Footer/Footer";
import Navigation from "components/molecules/Navigation/Navigation";

const GeneralProps = {
  children: PropTypes.node.isRequired,
  locales: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

const GeneralLayout: NextPage<InferProps<typeof GeneralProps>> = ({
  children,
  locales,
  handleClick,
}) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="w-full">
      <Navigation locales={locales} handleClick={handleClick} />
      <main className="relative mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default GeneralLayout;

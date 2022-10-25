import { NextPage } from "next";
import Footer from "../components/molecules/Footer/Footer";
import Navigation from "../components/molecules/Navigation/Navigation";
import PropTypes, { InferProps } from "prop-types";

const GeneralProps = {
  children: PropTypes.node.isRequired,
};

const GeneralLayout: NextPage<InferProps<typeof GeneralProps>> = ({
  children,
}) => {
  return (
    <div className="w-full">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;

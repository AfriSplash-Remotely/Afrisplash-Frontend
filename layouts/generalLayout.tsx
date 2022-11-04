import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import Footer from "components/molecules/Footer/Footer";
import Navigation from "components/molecules/Navigation/Navigation";

const GeneralProps = {
  children: PropTypes.node.isRequired,
};

const GeneralLayout: NextPage<InferProps<typeof GeneralProps>> = ({
  children,
}) => {
  return (
    <div className="w-full">
      <Navigation />
      <main className="relative xl:w-10/12 md:w-11/12 w-11/12   mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default GeneralLayout;

/* eslint-disable react/prop-types */
import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import Footer from "@/components/molecules/Footer/Footer";
import Navigation from "components/molecules/Navigation/Navigation";
import MobileNav from "@/components/molecules/Navigation/MobileNav";

const GeneralProps = {
  children: PropTypes.node.isRequired,
};

const GeneralLayout: NextPage<InferProps<typeof GeneralProps>> = ({
  children,
}) => {
  return (
    <div className="w-full relative">
      <div className="hidden lg:flex">

      <Navigation />
      </div>
      <MobileNav />
      <main className="relative mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default GeneralLayout;

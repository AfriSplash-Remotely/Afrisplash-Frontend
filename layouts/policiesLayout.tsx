/* eslint-disable react/prop-types */
import { NextPage } from "next";
import { MDXProvider } from '@mdx-js/react';
import PropTypes, { InferProps } from "prop-types";
import Footer from "components/molecules/Footer/Footer";
import Navigation from "components/molecules/Navigation/Navigation";
import Link from "next/link";
import { Heading, Para } from "@/components/PolicyMarkdown";



const PoliciesLayoutProps = {
    children: PropTypes.node.isRequired,
    pageTitle: PropTypes.string.isRequired
}

const LinkParams = [
    { title:"Introduction"},
    { title: "Contact details" },
    { title: "What data do we collect and how we use it" },
    { title: "What lawful basis do we rely on for processing?" },
    { title: "Who may we share your data with?" },
    { title: "What data is collected on our website?" },
    { title: "How we work with group companies" },
    { title: "Link to other websites" },
    { title: "Storage and retention of data" },

]

const components = {
    h1: Heading,
    p: Para
}

const PoliciesLayout: NextPage<InferProps<typeof PoliciesLayoutProps>> = ({ children, pageTitle }) => {
    return (
        <MDXProvider components={components}>
            <div className="w-full">
                <Navigation />
                <main className="relative mx-auto mt-12 py-8 px-28">
                    <div className="grid grid-cols-3 gap-12">
                        <div>
                            <div>
                                <h2 className="text-3xl font-medium">{pageTitle}</h2>
                            </div>

                            <div className="mt-12">
                                <h4 className="text-primary_green font-semibold text-lg">CONTENTS</h4>
                                <div className="py-6">
                                <ul className="flex flex-wrap md:flex-col gap-4">
                                    {LinkParams.map((link) => {
                                        return(
                                            <Link className="text-light_grey active:text-sunglow active:bg-light_green active:p-2 w-max active:rounded-md"
                                             href="#" key={link.title}> {link.title}</Link>

                                        )
                                    })}
                                </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-2 w-11/12 mt-2">
                            {children}
                        </div>
                    </div>
                </main>
                <Footer />

            </div>
        </MDXProvider>

    )
}






export default PoliciesLayout;
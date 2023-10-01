import React from "react";
import Button from "@/components/atoms/Button/Button";
import PropTypes, { InferProps } from "prop-types";
const TabProps = {
    id: PropTypes.number,
    title: PropTypes.string,
};


export default function Tabs({ id, title }: InferProps<typeof TabProps>): JSX.Element {
    return (
        <>
            <Button
                key={id}
                classes="relative  py-2 xlg:px-1 md:px-4 md:border-r md:border-gray-300 hover:text-sunglow hover:before:absolute hover:before:bottom-0 xl:hover:before:left-6 xlg:hover:before:left-4 md:hover:before:left-5 before:left-[25%] md:hover:before:w-[70%] hover:before:w-[50%] hover:before:h-0 hover:before:border-b-4 hover:before:border-b-sunglow"
            >
                {title}
            </Button>
        </>
    );
};


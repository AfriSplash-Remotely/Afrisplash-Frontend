import PropTypes, { InferProps } from "prop-types";

const HeadingProps = {
    children: PropTypes.node.isRequired,
}

function Heading({ children }: InferProps<typeof HeadingProps>):JSX.Element{
    return <h1 className="text-lg leading-4 font-bold">{children}</h1>
}

export default Heading
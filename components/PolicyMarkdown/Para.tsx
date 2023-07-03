import PropTypes, { InferProps } from "prop-types";

const ParaProps = {
    children: PropTypes.node.isRequired,
}

function Para({ children }: InferProps<typeof ParaProps>): JSX.Element {
    return <p className="tracking-normal text-base/7 py-4 text-primary_grey">{children}</p>
}

export default Para
import PropTypes, { InferProps } from "prop-types";

const SearchProps = {
    classes: PropTypes.string,
    onChange: PropTypes.func
}

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


const SearchBar = ({ classes, onChange }: InferProps<typeof SearchProps>) => {
    return (
        <>
            <div className="relative col-span-2">
                <MagnifyingGlassIcon className='z-20 absolute left-2 top-3 h-6 w-6' />
                <input className={`${classes}`} placeholder="Search by name or role..." onChange={onChange}
                />
            </div>
        </>
    )
}

export default SearchBar
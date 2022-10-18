interface SearchProps {
    classes?: string,
    onChange?: (e: any) => void | any;
}

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


const SearchBar = ({ classes, onChange }: SearchProps) => {
    return (
        <>
            <div className="relative col-span-2">
                <MagnifyingGlassIcon className='z-20 absolute left-2 top-3 h-6 w-6' />
                <input className={classes} placeholder="Search" onChange={onChange}
                />
            </div>
        </>
    )
}

export default SearchBar
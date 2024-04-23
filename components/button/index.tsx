

interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
    name?: string | undefined;
    className?: string;
    loading?: boolean;
    height?: string;
    disabled?: boolean;
    altText?: string;
    type?: "submit" | "reset" | "button" | undefined;
    onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    id?: string; //pass 'google' or 'github' as id if using social auth
}

export const Button = ({
    name,
    type,
    loading,
    altText,
    disabled,
    onClick,
    className,
    height
}: buttonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`flex  justify-center  text-xs font-semibold ${height ? height : "h-[56px]"}  items-center   bg-[#1C1D36] rounded-[16px] text-white px-3 min-w-[206px] max-w-[206px] ${className}`}
        >
            {loading ? `loading...` : `${name}`}
        </button>
    );
};

export const OutlineBtn = ({
    name,
    type,
    loading,
    altText,
    disabled,
    onClick,
    className,
    height
}: buttonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`flex  justify-center  text-base font-semibold ${height ? height : "h-[56px]"
                }  items-center   bg-transparent rounded-[16px] text-[#1C1D36] border border-[#B6BBB2] px-6 min-w-[206px] max-w-[206px] ${className}`}
        >
            {loading ? `${altText}` : `${name}`}
        </button>
    );
};





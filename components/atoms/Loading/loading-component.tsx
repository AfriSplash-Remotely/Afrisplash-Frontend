const LoadingComponent = (): JSX.Element => {
    return (
        <div className="flex flex-col space-y-4 w-full">
            <div className="bg-slate-200 h-8 w-full animate-pulse"></div>
            <div className="bg-slate-200 h-8 w-full animate-pulse"></div>
            <div className="bg-slate-200 h-8 w-full animate-pulse"></div>
            <div className="bg-slate-200 h-8 w-full animate-pulse"></div>
        </div>
    );
};

export default LoadingComponent;
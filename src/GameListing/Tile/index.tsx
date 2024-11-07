export const Tile = ({ title, imageSourcePath }: { title?: string, imageSourcePath: string }) => {
    return <div
        className="flex flex-row space-x-4 items-center justify-between text-black bg-white py-4 px-16 rounded-md w-[50dvh] md:w-auto">
        {title ? <h1 className="text-sm font-normal">{title}</h1> : null}
        <img src={imageSourcePath} alt={title} className="w-16" />
    </div>;
};
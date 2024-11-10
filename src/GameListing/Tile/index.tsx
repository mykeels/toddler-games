import { motion } from "framer-motion"

export const Tile = ({ title, imageSourcePath }: { title?: string, imageSourcePath: string }) => {
    return <motion.div
        layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-20 flex flex-row space-x-4 items-center justify-between text-black 
            bg-white py-4 px-8 rounded-md w-[50dvh] md:w-auto retina:w-[40dvh]
            group hover:shadow">
        {title ? <h1 className="text-sm font-normal group-hover:animate-breathe transition-all duration-300">{title}</h1> : null}
        <img src={imageSourcePath} alt={title} className="w-16 h-16 group-hover:animate-breathe transition-all duration-300" />
    </motion.div>;
};

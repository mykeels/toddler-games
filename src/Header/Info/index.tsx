import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Markdown } from "@/Markdown";
import clsx from "clsx"

export type InfoProps = {
    description: string;
}

export const Info = ({
    description
}: InfoProps) => {
    return <Dialog>
        <DialogTrigger>
            <button className="flex p-2 self-stretch justify-center">
                <img src="./icons/info-white.svg" alt="info" className={clsx("w-10 h-10")} />
            </button>
        </DialogTrigger>
        <DialogContent className="max-w-[90dvw] md:max-w-[60dvw] lg:max-w-[40dvw] bg-brand-primary">
            <DialogHeader>
                <DialogDescription className="text-brand-pink-500">
                    <Markdown>{description}</Markdown>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}
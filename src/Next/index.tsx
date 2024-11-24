import classNames from "clsx";
import { Button } from "@/components/ui/button";
import { onTouch } from "@/utils/touch";

export const Next = ({ onNext, className }: { onNext: () => void, className?: string | Record<string, boolean> }) => {
    return <Button variant="secondary"
        className={{
            [classNames("px-16 py-6 rounded-xl animate-breathe hsx:px-4 hsx:py-1", className)]: true,
            'h-9': false
        } as unknown as string}
        {...onTouch(onNext)}
    >
        <img src="./icons/arrow-right.svg" alt="Next" className="hsx:w-4" />
    </Button>;
}

export default Next;
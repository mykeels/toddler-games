import classNames from "clsx";
import { Button } from "@/components/ui/button";
import { onTouch } from "@/utils/touch";

export const Next = ({ onNext, className }: { onNext: () => void, className?: string | Record<string, boolean> }) => {
    return <Button variant="secondary"
        className={classNames("px-16 py-6 rounded-xl", className)}
        {...onTouch(onNext)}
    >
        <img src="./icons/arrow-right.svg" alt="Next" />
    </Button>;
}

export default Next;
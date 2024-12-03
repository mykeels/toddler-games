import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"

export default {
    title: "components/Dialog",
    component: Dialog,
};

export const Index = () => <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent className="max-w-[90dvw] md:max-w-[60dvw] lg:max-w-[40dvw]">
        <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
        </DialogHeader>
    </DialogContent>
</Dialog>;
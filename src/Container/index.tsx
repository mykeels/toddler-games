import React from "react";

export const Container = React.forwardRef(({ children }: { children: React.ReactNode }, ref: React.LegacyRef<HTMLDivElement>) => {
    return <div
        className="flex flex-col h-screen w-full p-4 hsx:p-2 bg-brand-primary text-white select-none space-y-8 hsx:space-y-2"
        ref={ref as React.LegacyRef<HTMLDivElement>}
    >{children}</div>;
});

export default Container;
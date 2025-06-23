import React from 'react';

export const Container = React.forwardRef(
  ({ children }: { children: React.ReactNode }, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div
        className="flex flex-col h-[100dvh] justify-stretch items-stretch w-full portrait:p-4 landscape:p-2 bg-brand-primary text-white select-none portrait:space-y-4 portrait:lg:space-y-8 landscape:space-y-4 hsx:space-y-2"
        ref={ref as React.LegacyRef<HTMLDivElement>}
      >
        {children}
      </div>
    );
  }
);

export default Container;

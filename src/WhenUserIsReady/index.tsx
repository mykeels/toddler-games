import { useState } from "react";

export const WhenUserIsReady = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isReady, setIsReady] = useState(false);
  return (
    <div className="toddler-games">
      {isReady ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center h-[96dvh]">
          <button
            className="bg-brand-primary text-white px-6 py-3 rounded-md border-2 border-white text-2xl"
            onClick={() => setIsReady(true)}
          >
            Begin
          </button>
        </div>
      )}
    </div>
  );
};

export default function FloatAround({ children }: { children: React.ReactNode }) {
    return <>
        <style>{`
            @keyframes float {
                0% {
                    transform: translate(0, 0);
                }
                25% {
                    transform: translate(calc(100vw - 100%), 25vh);
                }
                50% {
                    transform: translate(25vw, calc(100vh - 100%));
                }
                75% {
                    transform: translate(calc(100vw - 100%), 75vh);
                }
                100% {
                    transform: translate(0, 0);
                }
            }

            .float-around {
                position: absolute;
                animation: float 40s ease-in-out infinite;
                pointer-events: none;
            }
        `}</style>
        <div className="float-around">{children}</div>
    </>;
}


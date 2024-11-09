import { useId, useMemo } from "react";

export default function FloatAround({ children }: { children: React.ReactNode }) {
    const id = useId().replace(/:/g, '');
    const transforms = useMemo(() => getRandomTransforms(), []);
    return <>
        <style>{`
            @keyframes float-${id} {
                0% {
                    transform: ${transforms[0]};
                }
                25% {
                    transform: ${transforms[1]};
                }
                50% {
                    transform: ${transforms[2]};
                }
                75% {
                    transform: ${transforms[3]};
                }
                100% {
                    transform: ${transforms[0]};
                }
            }

            .float-around-${id} {
                position: fixed;
                animation: float-${id} 30s ease-in-out infinite;
                pointer-events: none;
            }
        `}</style>
        <div className={`float-around-${id} z-0`}>{children}</div>
    </>;
}

function getRandomTransforms(): string[] {
    const startingPoint = `translate(${Math.random() * 75}vw, ${Math.random() * 75}vh)`;
    const transforms: string[] = [startingPoint];
    for (let i = 0; i < 4; i++) {
        transforms.push(`translate(${Math.random() * 75}vw, ${Math.random() * 75}vh)`);
    }
    transforms.push(startingPoint);
    return transforms;
}


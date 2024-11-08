import { Button } from "@/components/ui/button";
import { speak } from "@/utils/speak";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Splash = () => {
    const navigate = useNavigate();
    useEffect(() => {
        speak("Welcome! Let's Play!");
    }, []);
    return (
        <section
            className=" h-screen"
            style={{
                backgroundImage: `url(./splash.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col items-center justify-center bg-black/50 w-full h-full space-y-10">
                <h1 className="text-6xl lg:text-[80px] font-lily text-white"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)", letterSpacing: "-4%" }}>
                    Let’s Play!
                </h1>
                <Button className="text-xl py-6 px-8" onClick={() => navigate({ to: "/menu" })}>
                    <span>Play</span>
                    <img src="./icons/play-white.svg" alt="play" />
                </Button>
            </div>
        </section>
    );
};

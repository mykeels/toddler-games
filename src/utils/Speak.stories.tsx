import { useSpeak } from "./speak";

export default {
  title: "components/Speak",
};

export const Speak = () => {
  const { speak } = useSpeak();
  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => speak("Hello World")}>Hello World</button>
      <button onClick={() => speak("a")}>a</button>
      <button onClick={() => speak("A")}>A</button>
      <button onClick={() => speak("1")}>1</button>
      <button onClick={() => speak("2")}>2</button>
      <button onClick={() => speak("3")}>3</button>
      <button onClick={() => speak("4")}>4</button>
      <button onClick={() => speak("5")}>5</button>
    </div>
  );
};

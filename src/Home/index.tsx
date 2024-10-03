import { Link } from "@tanstack/react-router";
import { fx } from "@/utils/sound";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const $window = window as any;
    if (!$window.__hasPlayedHome) {
      fx.home.play();
      $window.__hasPlayedHome = true;
    }
  }, []);

  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Toddler Games</h1>

      <ol className="list-decimal">
        <li>
          <Link to="/find-and-tap/uppercase">
            Find and Tap (Uppercase Letters only)
          </Link>
        </li>
        <li>
          <Link to="/find-and-tap/lowercase">
            Find and Tap (Lowercase Letters only)
          </Link>
        </li>
        <li>
          <Link to="/find-and-tap/numbers">Find and Tap (Numbers only)</Link>
        </li>
        <li>
          <Link to="/find-and-tap/fruits">Find and Tap (Fruits only)</Link>
        </li>
        <li>
          <Link to="/find-and-tap/animals">Find and Tap (Animals only)</Link>
        </li>
        <li>
          <Link to="/tap-to-count">Tap to Count</Link>
        </li>
        <li>
          <Link to="/free-draw">Free Draw</Link>
        </li>
        <li>
          <Link to="/image-to-letter-matching">Match Image to Letter</Link>
        </li>
        <li>
          <Link to="/image-to-letter-matching/lowercase">
            Match Image to Letter (Lowercase)
          </Link>
        </li>
        <li>
          <Link to="/number-keypad">Number Keypad</Link>
        </li>
      </ol>
    </div>
  );
};

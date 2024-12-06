import LetterTracing from ".";
import A from "./A/A";
import Across from "./Across/Across";
import B from "./B/B";
import Down from "./Down/Down";
import LeftSlash from "./LeftSlash";
import RightSlash from "./RightSlash";

export default {
  title: "Games/LetterTracing",
  component: LetterTracing,
};

export const WithAcross = () => <LetterTracing Letter={Across} name="Across" />;

export const WithDown = () => <LetterTracing Letter={Down} name="Down" />;

export const WithA = () => <LetterTracing Letter={A} name="uppercase A" />;

export const WithB = () => <LetterTracing Letter={B} name="uppercase B" />;

export const WithRightSlash = () => <LetterTracing Letter={RightSlash} name="Right Slash" />;

export const WithLeftSlash = () => <LetterTracing Letter={LeftSlash} name="Left Slash" />;

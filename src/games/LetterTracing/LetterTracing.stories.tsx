import LetterTracing from ".";
import A from "./A/A";
import Across from "./Across/Across";
import B from "./B/B";
import Down from "./Down/Down";

export default {
  title: "Games/LetterTracing",
  component: LetterTracing,
};

export const WithAcross = () => <LetterTracing Letter={Across} name="Across" />;

export const WithDown = () => <LetterTracing Letter={Down} name="Down" />;

export const WithA = () => <LetterTracing Letter={A} name="uppercase A" />;

export const WithB = () => <LetterTracing Letter={B} name="uppercase B" />;

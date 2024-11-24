import ReadWords from "./index";

export default {
  title: "Games/ReadWords",
  component: ReadWords,
};

export const AllWords = () => <ReadWords />;

export const Level2Letters = () => <ReadWords level={2} />;

export const Level3Letters = () => <ReadWords level={3} />;

export const Level4Letters = () => <ReadWords level={4} />;

export const Level5Letters = () => <ReadWords level={5} />;

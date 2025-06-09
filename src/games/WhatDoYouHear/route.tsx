import { useParams } from "react-router";
import WhatDoYouHear from ".";

export const WhatDoYouHearRoute = () => {
  const { uppercase } = useParams();
  return <WhatDoYouHear uppercase={uppercase === "uppercase"} />;
};

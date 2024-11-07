import { Button } from "@/components/ui/button";
import { Loading } from "./index";

export default {
  title: "Loading",
  component: Loading,
};

export const InButton = () => (
  <Button size="icon">
    <Loading />
  </Button>
);

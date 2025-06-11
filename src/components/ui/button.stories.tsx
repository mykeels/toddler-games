import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/utils/url";

export default {
  title: "components/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Link = () => <Button variant="link">Link</Button>;
export const Icon = () => {
  const baseUrl = getBaseUrl();
  return (
    <Button variant="secondary" size="icon">
      <img src={`${baseUrl}/icons/play.svg`} />
    </Button>
  );
};

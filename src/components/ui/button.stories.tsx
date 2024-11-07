import { Button } from "@/components/ui/button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Link = () => <Button variant="link">Link</Button>;
export const Icon = () => <Button variant="secondary" size="icon">
    <img src="./icons/play.svg" />
</Button>;

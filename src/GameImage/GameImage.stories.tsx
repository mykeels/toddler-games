import { GameImage } from './index';

export default {
  title: 'components/GameImage',
  component: GameImage,
};

export const Internal = () => <GameImage src="/images/dazzle-points-at-you.png" alt="Apple" />;

export const Unsplash = () => (
  <GameImage
    src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Apple"
  />
);

export const Giphy = () => (
  <GameImage
    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJqOTUwaXo0ZHl5cXQ2a3dqcWc4cTc0a2RkYWtjbTExZjdmN2hoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i3L6JoWcVZj1HuURSE/giphy.webp"
    alt="Apple"
  />
);

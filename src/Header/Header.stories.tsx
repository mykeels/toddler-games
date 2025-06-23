import { expect, within } from '@storybook/test';
import { Header } from './Header';
import { Menu } from './Menu';
import { story } from '@/utils/story';

export default {
  title: 'components/Header',
  component: Header,
};

export const Default = story(() => <Header title="Header" onRestart={() => {}} />, {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('header')).toBeInTheDocument();
  },
});

export const WithBackToHome = () => <Header title="Header" onRestart={() => {}} Left={<Header.BackToHome />} />;

export const WithMenu = () => (
  <Header
    title="Header"
    onRestart={() => {}}
    Right={
      <Header.Menu>
        <Menu.Item>
          <Header.Restart onRestart={() => {}} />
        </Menu.Item>
        <Menu.Item>
          <Header.Levels />
        </Menu.Item>
        <Menu.Item>
          <Header.BackToHome />
        </Menu.Item>
      </Header.Menu>
    }
  />
);

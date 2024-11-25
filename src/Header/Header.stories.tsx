import { Header } from "./Header";
import { Menu } from "./Menu";

export default {
    title: "components/Header",
    component: Header,
};

export const Default = () => <Header title="Header" onRestart={() => { }} />;

export const WithBackToHome = () => <Header title="Header" onRestart={() => { }} Left={<Header.BackToHome />} />;

export const WithMenu = () => <Header title="Header" onRestart={() => { }} Right={<Header.Menu>
    <Menu.Item>
        <Header.Restart onRestart={() => { }} />
    </Menu.Item>
    <Menu.Item>
        <Header.Levels />
    </Menu.Item>
    <Menu.Item>
        <Header.BackToHome />
    </Menu.Item>
</Header.Menu>} />;
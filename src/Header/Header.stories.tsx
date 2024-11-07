import { Header } from "./Header";

export default {
    title: "components/Header",
    component: Header,
};

export const Default = () => <Header title="Header" onRestart={() => { }} />;

export const WithBackToHome = () => <Header title="Header" onRestart={() => { }} Left={<Header.BackToHome />} />;
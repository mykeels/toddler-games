import { onTouch } from "@/utils/touch";
import { useNavigateToRoot } from "@/utils/useNavigateToRoot";
import { Link } from "@tanstack/react-router";
import { Menu } from "./Menu";
import { Levels } from "./Levels";

type HeaderProps = {
  title?: string;
  children?: React.ReactNode;
  Left?: React.ReactNode;
} & ({
  onRestart: () => void;
} | {
  Right?: React.ReactNode;
});

export const Header = ({ title, children, Left, ...props }: HeaderProps) => {
  return (
    <h1 className="text-4xl flex flex-row items-center justify-between bg-brand-primary p-2 text-white select-none z-10">
      {
        Left ? Left : <Header.BackToMenu title={title} />
      }
      <span className="text-center text-2xl md:text-4xl">{children ?? title}</span>
      <Header.Menu>
        {
          ("onRestart" in props) ? <Menu.Item>
            <Header.Restart onRestart={props.onRestart} />
          </Menu.Item> : null
        }
        <Menu.Item>
          <Header.Levels />
        </Menu.Item>
        <Menu.Item>{
          ("Right" in props) ? props.Right : null
        }</Menu.Item>
        <Menu.Item>
          <Header.BackToHome />
        </Menu.Item>
      </Header.Menu>
    </h1>
  );
};

export default Header;

const BackToMenu = ({ title }: { title?: string }) => {
  return <Link to="/menu" search={{ title }}>
    <img src="./icons/arrow-left.svg" alt="back" />
  </Link>
}

const BackToHome = () => {
  const navigateToRoot = useNavigateToRoot();
  return <Link to="/" onClick={async () => await navigateToRoot()}>
    <img src="./icons/home-white.svg" alt="home" />
  </Link>
}

const Restart = ({ onRestart }: { onRestart: () => void }) => {
  return <button {...onTouch(onRestart)}>
    <img src="./icons/restart-white.svg" alt="restart" />
  </button>
}

Header.BackToMenu = BackToMenu;
Header.BackToHome = BackToHome;
Header.Restart = Restart;
Header.Menu = Menu;
Header.Levels = Levels;
import { useNavigateToRoot } from "@/utils/useNavigateToRoot";
import { Link } from "react-router";
import { Menu } from "./Menu";
import { Levels } from "./Levels";
import clsx from "clsx";
import { Info } from "./Info";
import React from "react";

type HeaderProps = {
  title?: string;
  children?: React.ReactNode;
  Left?: React.ReactNode;
  noLevels?: boolean;
} & ({
  onRestart: () => void;
} | {
  Right?: React.ReactNode;
});

export const Header = ({ title, children, Left, ...props }: HeaderProps) => {
  return (
    <h1 className="text-4xl flex flex-row items-center justify-between bg-brand-primary px-2 text-white select-none z-10">
      {
        Left ? Left : <Header.BackToMenu title={title} />
      }
      <span className="text-center text-2xl md:text-4xl">{children ?? title}</span>
      <Header.Menu>
        {
          ("onRestart" in props && props.onRestart) ? <Menu.Item>
            <Header.Restart onRestart={props.onRestart} />
          </Menu.Item> : null
        }
        {
          !props.noLevels ? <Menu.Item>
            <Header.Levels />
          </Menu.Item> : null
        }
        {
          ("Right" in props)
            ? (React.isValidElement(props.Right) && props.Right.type === React.Fragment)
              ? React.Children.map(props.Right.props.children, (child) => child)
              : <Menu.Item>{props.Right}</Menu.Item>
            : null
        }
        <Menu.Item>
          <Header.BackToHome />
        </Menu.Item>
      </Header.Menu>
    </h1>
  );
};

export default Header;

const BackToMenu = ({ title }: { title?: string }) => {
  return <Link to={{
    pathname: "/menu",
    search: `title=${title}`
  }} className="flex p-2 self-stretch">
    <img src="./icons/arrow-left.svg" alt="back" />
  </Link>
}

const Back = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick} className="flex p-2 self-stretch">
    <img src="./icons/arrow-left.svg" alt="back" />
  </button>
}

const BackToHome = () => {
  const navigateToRoot = useNavigateToRoot();
  return <Link to="/" onClick={async () => await navigateToRoot()} className="flex p-2 self-stretch">
    <img src="./icons/home-white.svg" alt="home" />
  </Link>
}

const Restart = ({ onRestart, isLoading }: { onRestart: () => void, isLoading?: boolean }) => {
  return <button onClick={onRestart} className="flex p-2 self-stretch justify-center">
    <img src="./icons/restart-white.svg" alt="restart" className={clsx("w-10 h-10", {
      "animate-spin": isLoading
    })} />
  </button>
}

Header.Back = Back;
Header.BackToMenu = BackToMenu;
Header.BackToHome = BackToHome;
Header.Restart = Restart;
Header.Menu = Menu;
Header.Levels = Levels;
Header.Info = Info;
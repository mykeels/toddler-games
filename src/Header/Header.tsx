import { useNavigateToRoot } from '@/utils/useNavigateToRoot';
import { Link, useNavigate } from 'react-router';
import { Menu } from './Menu';
import { Levels } from './Levels';
import clsx from 'clsx';
import { Info } from './Info';
import React from 'react';
import { getBaseUrl } from '@/utils/url';

type HeaderProps = {
  title?: string;
  children?: React.ReactNode;
  Left?: React.ReactNode;
  noLevels?: boolean;
  noRight?: boolean;
} & (
  | {
      onRestart: () => void;
    }
  | {
      Right?: React.ReactNode;
    }
);

export const Header = ({ title, children, Left, ...props }: HeaderProps) => {
  return (
    <h1
      data-testid="header"
      className="text-4xl flex flex-row items-center justify-between bg-brand-primary px-2 text-white select-none z-10"
    >
      {Left ? Left : <Header.BackToMenu />}
      <span className="text-center text-2xl md:text-4xl">{children ?? title}</span>
      {!props.noRight ? (
        <Header.Menu>
          {'onRestart' in props && props.onRestart ? (
            <Menu.Item>
              <Header.Restart onRestart={props.onRestart} />
            </Menu.Item>
          ) : null}
          {!props.noLevels ? (
            <Menu.Item>
              <Header.Levels />
            </Menu.Item>
          ) : null}
          {'Right' in props && props.Right ? (
            React.isValidElement(props.Right) && props.Right.type === React.Fragment ? (
              React.Children.map(props.Right.props.children, (child) => child)
            ) : (
              <Menu.Item>{props.Right}</Menu.Item>
            )
          ) : null}
          <Menu.Item>
            <Header.BackToHome />
          </Menu.Item>
        </Header.Menu>
      ) : (
        <div></div>
      )}
    </h1>
  );
};

export default Header;

const BackToMenu = () => {
  const navigate = useNavigate();
  const baseUrl = getBaseUrl();
  return (
    <button
      className="flex p-2 self-stretch"
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src={`${baseUrl}/icons/arrow-left.svg`} alt="back" />
    </button>
  );
};

const Back = ({ onClick }: { onClick: () => void }) => {
  const baseUrl = getBaseUrl();
  return (
    <button onClick={onClick} className="flex p-2 self-stretch">
      <img src={`${baseUrl}/icons/arrow-left.svg`} alt="back" />
    </button>
  );
};

const BackToHome = () => {
  const baseUrl = getBaseUrl();
  const navigateToRoot = useNavigateToRoot();
  return (
    <Link to="/" onClick={async () => await navigateToRoot()} className="flex p-2 self-stretch">
      <img src={`${baseUrl}/icons/home-white.svg`} alt="home" />
    </Link>
  );
};

const Restart = ({ onRestart, isLoading }: { onRestart: () => void; isLoading?: boolean }) => {
  const baseUrl = getBaseUrl();
  return (
    <button onClick={onRestart} className="flex p-2">
      <img
        src={`${baseUrl}/icons/restart-white.svg`}
        alt="restart"
        className={clsx('w-10 h-10', {
          'animate-spin': isLoading,
        })}
      />
    </button>
  );
};

Header.Back = Back;
Header.BackToMenu = BackToMenu;
Header.BackToHome = BackToHome;
Header.Restart = Restart;
Header.Menu = Menu;
Header.Levels = Levels;
Header.Info = Info;

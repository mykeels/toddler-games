import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title?: string;
  onRestart: () => void;
  children?: React.ReactNode;
  Left?: React.ReactNode;
  Right?: React.ReactNode;
};

export const Header = ({ title, onRestart, children, Left, Right }: HeaderProps) => {
  return (
    <h1 className="text-4xl flex flex-row items-center justify-between bg-brand-primary p-2 text-white">
      {
        Left ? Left : <Header.BackToMenu title={title} />
      }
      <span className="text-center text-2xl md:text-4xl">{children ?? title}</span>
      {
        (Right) ? Right : Right === null ? <span></span> : <Header.Restart onRestart={onRestart} />
      }
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
  return <Link to="/">
    <img src="./icons/home-white.svg" alt="home" />
  </Link>
}

const Restart = ({ onRestart }: { onRestart: () => void }) => {
  return <button onClick={onRestart}>
    <img src="./icons/restart-white.svg" alt="restart" />
  </button>
}

Header.BackToMenu = BackToMenu;
Header.BackToHome = BackToHome;
Header.Restart = Restart;

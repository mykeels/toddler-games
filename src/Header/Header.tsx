import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title?: string;
  onRestart: () => void;
  children?: React.ReactNode;
};

export const Header = ({ title, onRestart, children }: HeaderProps) => {
  return (
    <h1 className="text-4xl text-gray-800">
      <Link to="/" search={{ title }} className="float-left">
        🔙
      </Link>
      <span>{children ?? title}</span>
      <button className="float-right" onClick={onRestart}>
        ↪️
      </button>
    </h1>
  );
};

export default Header;

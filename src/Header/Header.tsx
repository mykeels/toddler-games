import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title?: string;
  onRestart: () => void;
  children?: React.ReactNode;
};

export const Header = ({ title, onRestart, children }: HeaderProps) => {
  return (
    <h1 className="text-4xl text-gray-800 flex flex-row items-center justify-between">
      <Link to="/" search={{ title }}>
        🔙
      </Link>
      <span className="text-center text-2xl md:text-4xl">{children ?? title}</span>
      <button onClick={onRestart}>
        ↪️
      </button>
    </h1>
  );
};

export default Header;

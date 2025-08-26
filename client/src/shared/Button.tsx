import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

export const Button = ({ children, className = "", to }: Props) => {
  return (
    <Link
      to={to.startsWith("/") ? to : `/${to}`}
      className={`rounded-md px-3 py-1 bg-[#ffc132] hover:bg-[#ff616a] hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
};

import './Button.scss';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <span className="button__content">{children}</span>
    </button>
  );
}
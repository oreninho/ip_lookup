import './Button.scss';

export interface ButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
    className?: string;
}

export default function Button({ onClick, icon, children, className }: ButtonProps) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__label">{children}</span>
    </button>
  );
}
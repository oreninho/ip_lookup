import './Button.scss';

export interface ButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({ onClick, icon, children }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__label">{children}</span>
    </button>
  );
}
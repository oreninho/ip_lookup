import './Header.scss';

export interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="header">
      <h3 className="header__title">{title}</h3>
      <hr className="header__divider" />
      {subtitle && <p className="header__subtitle">{subtitle}</p>}
    </header>
  );
}
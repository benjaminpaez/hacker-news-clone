import { header, link } from './Header.css'

export const Header = () => {
  return (
    <nav className={header}>
        <img src="/logo.gif" alt="Logo" />
        <a href="/" className={link}>
            Hacker News
        </a>
    </nav>
  )
}

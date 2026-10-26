import { navLinks } from "../data/nav";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="logo">
          Tech<span>Nova</span>
        </p>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
        <small>© {new Date().getFullYear()} TechNova. Barcha huquqlar himoyalangan.</small>
      </div>
    </footer>
  );
}

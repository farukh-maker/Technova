import { useState } from "react";
import { navLinks } from "../data/nav";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={close}>
          Tech<span>Nova</span>
        </a>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Asosiy menyu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#contact" onClick={close}>
          Bog‘lanish
        </Button>

        <button
          type="button"
          className="burger"
          aria-label="Menyuni ochish"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

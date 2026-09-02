import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    Menu,
    X,
} from "lucide-react";

const navItems = [
    {
        to: "/",
        label: "Home",
        end: true,
    },
    {
        to: "/sobre-mi",
        label: "Sobre mí",
    },
    {
        to: "/estudios",
        label: "Estudios",
    },
];

function Layout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="app-shell">
            <header className="navbar">
                <Link
                    to="/"
                    className="brand"
                    onClick={() => setOpen(false)}
                >
                    <span className="brand-mark">&lt;/&gt;</span>

                    <span>
                        Gabo<span className="dot">.</span>
                    </span>
                </Link>

                <button
                    className="menu-button"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={open ? "nav-links open" : "nav-links"}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <a
                        href="mailto:gastelum.gabriel.3m@gmail.com"
                        className="nav-contact"
                        onClick={() => setOpen(false)}
                    >
                        Contacto
                        <ArrowUpRight size={16} />
                    </a>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="footer">
                <div>
                    <strong>
                        Gabo<span className="dot">.</span>
                    </strong>

                    <span>
                        Ingeniería + desarrollo frontend.
                    </span>
                </div>

                <div className="socials">
                    <a
                        href="https://github.com/gabofencio"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <Github size={19} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gabriel-isaac-gastelum-miramontes-a968872b0/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={19} />
                    </a>

                    <a
                        href="mailto:gastelum.gabriel.3m@gmail.com"
                        aria-label="Email"
                    >
                        <Mail size={19} />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
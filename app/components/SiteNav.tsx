"use client";

import { useState } from "react";
import Wordmark from "./Wordmark";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Programs", href: "#programs" },
  { label: "Coaching", href: "#" },
  { label: "Sponsorship", href: "#sponsor" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Wordmark />

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a href="#" className="signin">
            Sign In
          </a>
          <a href="#" className="btn btn-primary">
            Register Now
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <div className="wrap">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#" className="btn btn-primary" onClick={() => setOpen(false)}>
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
}

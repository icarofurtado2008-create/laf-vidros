"use client";
import { useEffect, useState } from "react";
import { wa, MSG } from "@/lib/site";

const LINKS = [
  ["solucoes", "Soluções"],
  ["projetos", "Projetos"],
  ["manutencao", "Manutenção"],
  ["sobre", "Sobre"],
  ["contato", "Contato"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: "-45% 0px -50% 0px",
    });
    LINKS.forEach(([id]) => {
      const s = document.getElementById(id);
      if (s) io.observe(s);
    });
    return () => {
      removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <a href="#top" className="nav-brand">
        LAF<span>VIDROS</span>
      </a>
      <a href="#top" className="nav-mark" aria-label="LAF Vidros — início">
        <svg viewBox="0 0 40 40" aria-hidden>
          <rect x="7" y="4" width="11" height="30" />
          <rect x="22" y="11" width="11" height="23" />
          <path d="M3 36 H37" />
        </svg>
      </a>
      <nav className="nav-links" aria-label="Principal">
        {LINKS.map(([id, label], i) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""} onClick={() => setOpen(false)}>
            <i>0{i + 1}</i>
            {label}
          </a>
        ))}
        <a className="nav-cta" href={wa(MSG.geral)} target="_blank" rel="noopener">
          Solicitar orçamento <b>↗</b>
        </a>
      </nav>
      <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
      </button>
    </header>
  );
}

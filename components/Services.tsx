"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { wa, MSG } from "@/lib/site";

const ITEMS = [
  {
    key: "box", label: "Box", img: "/img/box-frame.webp", pos: "50% 40%",
    title: "Box de vidro temperado",
    text: "Do box de correr ao box do piso ao teto. Incolor, jateado ou com faixa de jateamento, com perfis e roldanas definidos pelo projeto do banheiro.",
    cta: "Quero orçamento para box", msg: MSG.box,
  },
  {
    key: "janelas", label: "Janelas", img: "/img/box-gold.webp", pos: "50% 22%",
    title: "Janelas e portas de vidro",
    text: "Janelas em vidro temperado com sistemas de abertura modernos, portas de correr e fechamentos de sacada em vidro incolor.",
    cta: "Quero orçamento para janela", msg: MSG.janela,
  },
  {
    key: "vitrines", label: "Vitrines", img: "/img/espelho.webp", pos: "50% 65%",
    title: "Vitrines e ambientes comerciais",
    text: "Vidro como plano de apresentação do negócio: superfícies limpas que expõem o produto e organizam o espaço.",
    cta: "Quero orçamento para vitrine", msg: MSG.vitrine,
  },
  {
    key: "espelhos", label: "Espelhos", img: "/img/espelho.webp", pos: "25% 30%",
    title: "Espelhos sob medida",
    text: "Espelho prata para ampliar e iluminar lavabos, banheiros e áreas comerciais — medida exata, do piso ao teto se o projeto pedir.",
    cta: "Quero orçamento para espelho", msg: MSG.espelho,
  },
  {
    key: "manutencao", label: "Manutenção", img: "/img/box-gold.webp", pos: "50% 4%",
    title: "Manutenção de box",
    text: "Box de correr e box embutido revisados: roldanas, trilhos, alinhamento e fixações, para o vidro voltar a correr com segurança.",
    cta: "Preciso de manutenção", msg: MSG.manutencao,
  },
];

export default function Services() {
  const [i, setI] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const it = ITEMS[i];

  function pick(n: number) {
    if (n === i) return;
    const el = stage.current;
    if (el && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const q = gsap.utils.selector(el);
      gsap.killTweensOf(q(".svc-wipe"));
      gsap.fromTo(q(".svc-wipe"), { xPercent: -101 }, { xPercent: 101, duration: 0.9, ease: "expo.inOut" });
      gsap.delayedCall(0.42, () => setI(n));
      gsap.fromTo(q(".svc-copy > *"), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, delay: 0.45 });
    } else setI(n);
  }

  return (
    <section className="svc" id="solucoes">
      <header className="sec-head" data-reveal>
        <span className="idx">02 — Soluções</span>
        <h2>
          Cada vão pede
          <br />
          uma solução.
        </h2>
      </header>
      <div className="svc-grid">
        <div className="svc-list" role="tablist" aria-label="Soluções">
          {ITEMS.map((x, n) => (
            <button key={x.key} role="tab" aria-selected={n === i} onClick={() => pick(n)}>
              <i>0{n + 1}</i>
              <span>{x.label}</span>
              <b aria-hidden>→</b>
            </button>
          ))}
        </div>
        <div className="svc-stage" ref={stage} role="tabpanel">
          <div className="svc-img">
            <Image key={it.key} src={it.img} alt={it.title} fill sizes="(max-width:900px) 100vw, 58vw" style={{ objectPosition: it.pos }} />
            <span className="svc-wipe" />
            <span className="corners" />
            <span className="tag">{String(i + 1).padStart(2, "0")} / 05</span>
          </div>
          <div className="svc-copy">
            <h3>{it.title}</h3>
            <p>{it.text}</p>
            <a className="link-cta" href={wa(it.msg)} target="_blank" rel="noopener">
              {it.cta} <b>↗</b>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

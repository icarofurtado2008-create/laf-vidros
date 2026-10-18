"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { wa, MSG } from "@/lib/site";

/** Cinematic opening: a real installation behind sliding glass planes and architectural rules. */
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.9 });
      tl.from(".hero-img", { scale: 1.04, duration: 2.2, ease: "power2.out" })
        .from(".pane", { xPercent: (i) => (i % 2 ? 110 : -110), duration: 1.4, stagger: 0.1, ease: "expo.out" }, 0)
        .from(".hero-rule", { scaleY: 0, transformOrigin: "top", duration: 1.2, stagger: 0.1, ease: "expo.out" }, 0.1)
        .from(".hero h1 .ln > span", { yPercent: 110, duration: 1.1, stagger: 0.1, ease: "expo.out" }, 0.3)
        .from(".hero-sub, .hero-ctas, .hero-meta", { y: 16, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.7);
      const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
      gsap.to(".pane.p1", { yPercent: -10, ease: "none", scrollTrigger: st });
      gsap.to(".pane.p2", { yPercent: -20, ease: "none", scrollTrigger: st });
      gsap.to(".hero-media", { yPercent: 6, ease: "none", scrollTrigger: st });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero" id="top">
      <div className="hero-media">
        <Image
          className="hero-img"
          src="/img/box-frame.webp"
          alt="Box de vidro temperado do piso ao teto em banheiro com forro iluminado"
          fill
          priority
          fetchPriority="high"
          quality={90}
          sizes="(max-width: 900px) 100vw, 75vw"
        />
      </div>
      <div className="hero-veil" />
      <div className="pane p1"><span className="sheen" /></div>
      <div className="pane p2"><span className="sheen" /></div>
      <div className="pane p3" />
      <span className="hero-rule r1" />
      <span className="hero-rule r2" />
      <span className="hero-rule r3" />

      <div className="hero-content">
        <p className="eyebrow">LAF Vidros — Arquitetura em vidro</p>
        <h1>
          <span className="ln"><span>Vidro que</span></span>
          <span className="ln"><span>transforma</span></span>
          <span className="ln"><span><em>espaço.</em></span></span>
        </h1>
        <p className="hero-sub">
          Soluções em vidro para ambientes residenciais e comerciais, com instalação e manutenção especializada.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-solid" href={wa(MSG.geral)} target="_blank" rel="noopener">
            Solicitar orçamento <b>↗</b>
          </a>
          <a className="btn btn-line" href="#solucoes">
            Ver soluções <b>↓</b>
          </a>
        </div>
      </div>

      <dl className="hero-meta">
        <div><dt>Material</dt><dd>Vidro temperado</dd></div>
        <div><dt>Atuação</dt><dd>Instalação · Manutenção</dd></div>
        <div><dt>Mercado</dt><dd>+13 anos</dd></div>
      </dl>
    </section>
  );
}

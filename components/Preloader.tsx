"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** ~1s: a vertical line crosses the screen revealing LAF as a reflection, then two panels part. */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current!;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.remove();
      return;
    }
    const q = gsap.utils.selector(el);
    const tl = gsap.timeline({ onComplete: () => el.remove() });
    tl.fromTo(q(".pl-line"), { left: "0%" }, { left: "100%", duration: 0.6, ease: "power2.inOut" })
      .fromTo(q(".pl-word"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power2.inOut" }, 0)
      .to(q(".pl-word, .pl-line"), { opacity: 0, duration: 0.2 }, 0.62)
      .to(q(".pl-panel.a"), { yPercent: -100, duration: 0.45, ease: "expo.in" }, 0.62)
      .to(q(".pl-panel.b"), { yPercent: 100, duration: 0.45, ease: "expo.in" }, 0.62);
  }, []);
  return (
    <div ref={root} className="preloader" aria-hidden>
      <div className="pl-panel a" />
      <div className="pl-panel b" />
      <div className="pl-word">
        LAF<span>LAF</span>
      </div>
      <div className="pl-line" />
    </div>
  );
}

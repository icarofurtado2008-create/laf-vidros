import Image from "next/image";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Motion from "@/components/Motion";
import { wa, MSG, INSTAGRAM } from "@/lib/site";

const PROJECTS = [
  { src: "/img/box-frame.webp", pos: "50% 30%", cls: "p-tall", t: "Box do piso ao teto", d: "Vidro temperado incolor · perfil fino" },
  { src: "/img/espelho.webp", pos: "50% 20%", cls: "p-wide", t: "Lavabo comercial", d: "Espelho prata em parede e teto" },
  { src: "/img/box-gold.webp", pos: "50% 50%", cls: "p-std", t: "Box de correr", d: "Acabamento dourado · banheiro em mármore" },
];

const DETAILS = [
  { src: "/img/box-gold.webp", pos: "48% 4%", k: "Roldanas", d: "Sistema de correr aparente, alinhado ao trilho." },
  { src: "/img/box-frame.webp", pos: "42% 8%", k: "Junções", d: "Encontro de planos no canto, do piso ao forro." },
  { src: "/img/box-gold.webp", pos: "92% 60%", k: "Perfis", d: "Acabamento dourado em todo o perímetro." },
  { src: "/img/espelho.webp", pos: "65% 4%", k: "Paginação", d: "Espelho modulado com juntas retas." },
];

export default function Page() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />

        {/* 01 — Impacto */}
        <section className="impact">
          <span className="idx" data-reveal>01 — Manifesto</span>
          <h2 className="impact-h" data-reveal>
            Mais do que vidro.
            <br />
            <span>Estrutura, segurança e acabamento.</span>
          </h2>
          <div className="impact-row">
            <hr data-line />
            <p data-reveal>
              Vidro temperado medido, cortado para o vão e instalado com ferragens alinhadas. O resultado é um plano que some na
              arquitetura — e funciona todos os dias.
            </p>
          </div>
          <ul className="impact-words" data-reveal>
            <li>Medida</li>
            <li>Instalação</li>
            <li>Segurança</li>
            <li>Acabamento</li>
            <li>Manutenção</li>
          </ul>
        </section>

        <Services />

        {/* 03 — Manutenção */}
        <section className="mnt" id="manutencao">
          <div className="mnt-media" data-mask>
            <Image src="/img/box-gold.webp" alt="Box de vidro de correr com perfis e roldanas dourados" fill sizes="(max-width:900px) 100vw, 45vw" data-parallax="6" />
            <span className="corners" />
          </div>
          <div className="mnt-copy">
            <span className="idx" data-reveal>03 — Manutenção preventiva</span>
            <h2 data-reveal>
              Segurança também
              <br />
              depende de manutenção.
            </h2>
            <p data-reveal>
              Um box é um painel de vidro em movimento diário. Roldanas desgastam, trilhos acumulam resíduos, fixações cedem. Revisar
              antes que o vidro trave ou desalinhe é o que mantém o conjunto seguro.
            </p>
            <ol className="mnt-list" data-reveal>
              <li><i>A</i>Roldanas e sistema de correr</li>
              <li><i>B</i>Trilhos, guias e limpeza técnica</li>
              <li><i>C</i>Alinhamento, prumo e fixações</li>
              <li><i>D</i>Box de correr e box embutido</li>
            </ol>
            <p className="mnt-norm" data-reveal>
              <b>ABNT NBR 14207</b>
              <span>Norma brasileira de referência para boxes de banheiro fabricados com vidros de segurança.</span>
            </p>
            <a className="btn btn-amber" href={wa(MSG.manutencao)} target="_blank" rel="noopener" data-reveal>
              Preciso de manutenção <b>↗</b>
            </a>
          </div>
        </section>

        {/* 04 — Projetos */}
        <section className="prj" id="projetos">
          <header className="sec-head" data-reveal>
            <span className="idx">04 — Projetos</span>
            <h2>
              O vidro como parte
              <br />
              da arquitetura.
            </h2>
          </header>
          <div className="prj-grid">
            {PROJECTS.map((p, n) => (
              <figure key={p.t} className={`prj-item ${p.cls}`}>
                <div className="prj-img" data-mask>
                  <Image src={p.src} alt={`${p.t} — ${p.d}`} fill sizes="(max-width:900px) 100vw, 60vw" style={{ objectPosition: p.pos }} data-parallax="5" />
                </div>
                <figcaption data-reveal>
                  <i>P.0{n + 1}</i>
                  <strong>{p.t}</strong>
                  <span>{p.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <a className="link-cta prj-more" href={INSTAGRAM} target="_blank" rel="noopener">
            Mais projetos em @lafvidros <b>↗</b>
          </a>
        </section>

        {/* 05 — Detalhes */}
        <section className="dtl">
          <header className="sec-head" data-reveal>
            <span className="idx">05 — Detalhes</span>
            <h2>
              O resultado está
              <br />
              nos detalhes.
            </h2>
          </header>
          <div className="dtl-row">
            {DETAILS.map((d, n) => (
              <figure key={d.k} className="dtl-item" data-reveal>
                <div className="dtl-img">
                  <Image src={d.src} alt={d.k} fill sizes="(max-width:700px) 80vw, 25vw" style={{ objectPosition: d.pos, transform: "scale(2.4)", transformOrigin: d.pos }} />
                  <span className="cross" />
                </div>
                <figcaption>
                  <i>D.0{n + 1}</i>
                  <strong>{d.k}</strong>
                  <span>{d.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 06 — Sobre */}
        <section className="about" id="sobre">
          <div className="about-big" aria-hidden data-parallax="12">13</div>
          <div className="about-copy">
            <span className="idx" data-reveal>06 — Sobre</span>
            <h2 data-reveal>
              Mais de 13 anos
              <br />
              trabalhando com vidro.
            </h2>
            <p data-reveal>
              A LAF Vidros projeta, instala e mantém soluções em vidro temperado para casas e espaços comerciais: box, janelas, portas,
              vitrines, espelhos e projetos personalizados.
            </p>
            <div className="about-steps" data-reveal>
              <div><i>01</i><strong>Contato</strong><span>Pelo WhatsApp, com fotos e medidas aproximadas do vão.</span></div>
              <div><i>02</i><strong>Orçamento</strong><span>Proposta sem compromisso para a solução certa.</span></div>
              <div><i>03</i><strong>Instalação</strong><span>Execução e acabamento pela equipe LAF.</span></div>
            </div>
          </div>
        </section>

        {/* 07 — Contato */}
        <section className="cta" id="contato">
          <span className="idx" data-reveal>07 — Orçamento</span>
          <h2 data-reveal>Qual é o seu projeto?</h2>
          <div className="cta-list">
            {[
              ["Quero orçamento para box", MSG.box],
              ["Quero orçamento para janela", MSG.janela],
              ["Quero orçamento para vitrine", MSG.vitrine],
              ["Preciso de manutenção", MSG.manutencao],
            ].map(([label, msg], n) => (
              <a key={label} href={wa(msg)} target="_blank" rel="noopener" data-reveal>
                <i>0{n + 1}</i>
                <span>{label}</span>
                <b>WhatsApp ↗</b>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="ft">
        <div className="ft-top">
          <p className="ft-h">Vidro que transforma espaço.</p>
          <a className="btn btn-solid" href={wa(MSG.geral)} target="_blank" rel="noopener">
            Solicitar orçamento <b>↗</b>
          </a>
        </div>
        <div className="ft-cols">
          <nav aria-label="Soluções">
            <i>Soluções</i>
            <a href={wa(MSG.box)} target="_blank" rel="noopener">Box</a>
            <a href={wa(MSG.janela)} target="_blank" rel="noopener">Janelas</a>
            <a href={wa(MSG.vitrine)} target="_blank" rel="noopener">Vitrines</a>
            <a href={wa(MSG.manutencao)} target="_blank" rel="noopener">Manutenção</a>
          </nav>
          <nav aria-label="Contato">
            <i>Contato</i>
            <a href={wa(MSG.geral)} target="_blank" rel="noopener">WhatsApp</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener">Instagram @lafvidros</a>
          </nav>
          <div className="ft-logo">
            <Image src="/img/logo.png" alt="LAF Vidros" width={88} height={88} />
          </div>
        </div>
        <div className="ft-mega" aria-hidden>
          <span>LAF</span>
          <span>VIDROS</span>
        </div>
        <p className="ft-copy">© {new Date().getFullYear()} LAF Vidros</p>
      </footer>
      <Motion />
    </>
  );
}

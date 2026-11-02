import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Cpu, Lightbulb, Clock } from "lucide-react";

const LINK = "https://go.hotmart.com/X108292328M?dp=1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renda IA — Transforme IA em oportunidades de renda" },
      { name: "description", content: "Conheça o Renda IA e aprenda a usar a inteligência artificial para explorar novas possibilidades no digital." },
      { property: "og:title", content: "Renda IA — Transforme IA em oportunidades" },
      { property: "og:description", content: "Aprenda a usar a inteligência artificial para explorar novas possibilidades no digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children, big }: { children: React.ReactNode; big?: boolean }) {
  return (
    <a
      href={LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full border border-primary-glow/60 bg-primary/20 font-display font-extrabold uppercase tracking-wide text-foreground shadow-glow transition hover:scale-105 hover:bg-primary/35 ${big ? "px-10 py-5 text-lg" : "px-7 py-4"}`}
    >
      <span className="grid size-8 place-items-center rounded-full bg-foreground text-background transition group-hover:translate-x-1">
        <ArrowRight className="size-4" />
      </span>
      {children}
    </a>
  );
}

const cards = [
  { icon: Cpu, t: "Conheça ferramentas de IA" },
  { icon: Lightbulb, t: "Descubra novas possibilidades" },
  { icon: Clock, t: "Aprenda no seu ritmo" },
];

const faq = [
  ["Preciso ter experiência com IA?", "Os detalhes sobre o nível do conteúdo estão na página oficial do curso na Hotmart."],
  ["Como funciona o acesso?", "A compra e o acesso são feitos pela Hotmart. Consulte a página oficial para as condições."],
  ["Onde faço minha inscrição?", "Clique em qualquer botão deste site para ir à página oficial de compra na Hotmart."],
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="font-display text-xl font-black">RENDA <span className="text-gradient">IA</span></span>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#faq" className="hover:text-foreground">Dúvidas</a>
          </nav>
        </div>
      </header>

      <section className="bg-hero relative px-5 pt-32 pb-24">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <h1 className="text-5xl font-black uppercase leading-[1.05] sm:text-7xl">
            Transforme <span className="text-gradient">IA</span> em oportunidades <span className="text-gradient">de renda</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Aprenda a usar a <span className="font-semibold text-primary-glow">inteligência artificial</span> para explorar novas possibilidades no digital.
          </p>
          <div className="mt-10 flex justify-center">
            <Cta big>Quero conhecer o curso</Cta>
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {cards.map(({ icon: I, t }) => (
            <div key={t} className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <I className="size-10 shrink-0 text-primary-glow" />
              <p className="font-display text-lg font-bold">{t}</p>
            </div>
          ))}
        </div>
      </section>


      <section id="faq" className="px-5 py-12">
        <div className="mx-auto max-w-3xl space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-border bg-card/60 p-5">
              <summary className="cursor-pointer list-none font-display font-bold">{q}</summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-hero px-5 py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase sm:text-5xl">
          Seu próximo passo na <span className="text-gradient">IA</span> começa aqui
        </h2>
        <div className="mt-10"><Cta big>Conhecer o treinamento</Cta></div>
        <p className="mt-12 text-xs italic text-muted-foreground">Resultados dependem da aplicação e dedicação de cada pessoa.</p>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden">
        <a href={LINK} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-primary py-4 text-center font-display font-extrabold uppercase text-primary-foreground shadow-glow">
          Conheça o curso
        </a>
      </div>
    </main>
  );
}

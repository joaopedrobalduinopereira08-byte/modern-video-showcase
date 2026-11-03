import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BrainCircuit, BookOpen, Compass, Cpu, ShieldCheck, Plus, Check, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, training, faqs } from "@/lib/training-content";
import learningImage from "@/assets/digital-learning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Renda IA Guide Easy | Conheça o treinamento de inteligência artificial" },
    { name: "description", content: "Conheça o Renda IA Guide Easy, explore o aprendizado de inteligência artificial e consulte conteúdo, acesso e condições da oferta na Hotmart." },
    { property: "og:title", content: "Renda IA Guide Easy | Inteligência artificial e habilidades digitais" },
    { property: "og:description", content: "Explore novas habilidades digitais com inteligência artificial. Conheça o treinamento e confira a oferta na Hotmart." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function PurchaseLink({ children = "QUERO ACESSAR O TREINAMENTO", className = "" }: { children?: ReactNode; className?: string }) {
  return <Button asChild size="lg" className={`purchase-link ${className}`}><a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" data-purchase-link>{children}<ArrowUpRight aria-hidden="true" /></a></Button>;
}

const interests = [
  { icon: BrainCircuit, title: "Entender a inteligência artificial", text: "Você quer conhecer a tecnologia e suas possibilidades no ambiente digital." },
  { icon: Compass, title: "Explorar novas ferramentas", text: "Você tem curiosidade sobre como a IA pode fazer parte da sua rotina." },
  { icon: BookOpen, title: "Desenvolver habilidades digitais", text: "Você busca um próximo passo para ampliar seu repertório de conhecimento." },
];

function Index() {
  return <main className="min-h-screen bg-background pb-24 sm:pb-0">
    <header className="site-header">
      <div className="page-width flex h-20 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Renda IA — início" className="flex items-center gap-3"><BrainCircuit className="size-7 text-primary" aria-hidden="true" /><span className="font-display text-xl font-extrabold">RENDA <span className="text-primary">IA</span></span></a>
        <nav aria-label="Navegação principal" className="flex items-center gap-6 text-sm">
          <a href="#conteudo" className="hidden text-muted-foreground transition hover:text-foreground sm:block">O treinamento</a>
          <a href="#faq" className="text-muted-foreground transition hover:text-foreground">Dúvidas</a>
          <Button asChild variant="outline" className="hidden sm:inline-flex"><a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" data-purchase-link>Conhecer o curso <ArrowUpRight aria-hidden="true" /></a></Button>
        </nav>
      </div>
    </header>

    <section id="inicio" className="learning-hero relative isolate overflow-hidden">
      <img src={learningImage} alt="Notebook em uma mesa de estudos, com uma representação visual de conexões digitais na tela" width={1536} height={1024} fetchPriority="high" className="hero-photo absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="page-width hero-content">
        <p className="eyebrow flex items-center gap-2"><span className="h-px w-7 bg-primary" /> INTELIGÊNCIA ARTIFICIAL · APRENDIZADO DIGITAL</p>
        <h1 className="mt-5 max-w-xl font-display text-5xl font-extrabold leading-[1.08] sm:text-6xl">Renda IA<br /><span className="text-primary">Guide Easy.</span></h1>
        <h2 className="mt-6 max-w-lg text-xl font-semibold leading-relaxed sm:text-2xl">Descubra como utilizar a inteligência artificial para desenvolver novas habilidades digitais.</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">Conheça o treinamento e explore possibilidades da IA no universo digital. Confira o conteúdo e escolha o próximo passo para o seu aprendizado.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5"><PurchaseLink>QUERO CONHECER O TREINAMENTO</PurchaseLink><Button asChild variant="link" className="px-0 text-foreground"><a href="#conteudo">Explorar o conteúdo <ArrowRight aria-hidden="true" /></a></Button></div>
        <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-4 text-primary" aria-hidden="true" /> Compra pela Hotmart. Confira as condições antes de comprar.</p>
      </div>
    </section>

    <section className="border-y border-border bg-secondary/40">
      <div className="page-width grid gap-5 py-6 sm:grid-cols-3">
        {[{ icon: Cpu, label: "Inteligência artificial" }, { icon: BookOpen, label: "Treinamento digital" }, { icon: Compass, label: "Novas possibilidades" }].map(({ icon: Icon, label }) => <div key={label} className="flex items-center justify-center gap-3 text-sm font-semibold"><Icon className="size-5 text-primary" aria-hidden="true" />{label}</div>)}
      </div>
    </section>

    <section className="section-space page-width" aria-labelledby="publico-heading">
      <div className="section-heading"><p className="eyebrow">SEU PRÓXIMO PASSO</p><h2 id="publico-heading">O que você quer descobrir com a IA?</h2><p>Se estes interesses fazem parte do seu momento, vale conhecer a proposta do treinamento e conferir para quem ele é indicado.</p></div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{interests.map(({ icon: Icon, title, text }, i) => <article key={title} className="interest-card"><div className="flex items-center justify-between"><Icon className="size-7 text-primary" aria-hidden="true" /><span className="font-display text-sm text-muted-foreground">0{i + 1}</span></div><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    </section>

    <section id="conteudo" className="section-space border-y border-border bg-secondary/30">
      <div className="page-width grid items-start gap-10 lg:grid-cols-2">
        <div className="section-heading"><p className="eyebrow">O TREINAMENTO</p><h2>Conhecimento antes<br />de qualquer promessa.</h2><p>O {training.name} é um treinamento digital voltado à inteligência artificial e ao universo digital.</p><p>Antes de decidir, confira a descrição completa do produtor: aulas, ferramentas utilizadas, pré-requisitos e materiais incluídos.</p><Button asChild variant="link" className="mt-5 px-0"><a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" data-purchase-link>Conferir conteúdo na Hotmart <ArrowUpRight aria-hidden="true" /></a></Button></div>
        <div className="divide-y divide-border border-y border-border">{[{ title: "Conteúdo e aulas", text: "Consulte a programação oficial e os assuntos abordados pelo produtor." }, { title: "Ferramentas e aplicações", text: "Verifique quais ferramentas fazem parte do curso e se exigem cadastro ou assinatura." }, { title: "Seu momento de aprendizado", text: "Confira o nível das aulas e os conhecimentos necessários antes de se inscrever." }].map((item, i) => <div key={item.title} className="flex gap-5 py-6"><span className="pt-1 font-display text-sm text-primary">0{i + 1}</span><div><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div></div>)}</div>
      </div>
      {training.modules.length > 0 && <div className="page-width mt-10 grid gap-4 md:grid-cols-3">{training.modules.map(module => <article key={module.name} className="interest-card"><BookOpen className="text-primary" /><h3 className="mt-4 font-bold">{module.name}</h3><p className="mt-2 text-muted-foreground">{module.description}</p><p className="mt-3 text-sm">{module.learning}</p></article>)}</div>}
      {training.tools.length > 0 && <div className="page-width mt-8 grid gap-4 md:grid-cols-3">{training.tools.map(tool => <article key={tool.name} className="interest-card"><Cpu className="text-primary" /><h3 className="mt-4 font-bold">{tool.name}</h3><p className="mt-2 text-muted-foreground">{tool.description}</p><p className="mt-3 text-sm">{tool.conditions}</p></article>)}</div>}
      {training.benefits.length > 0 && <ul className="page-width mt-8 space-y-3">{training.benefits.map(benefit => <li key={benefit} className="flex gap-2"><Check className="size-5 text-primary" />{benefit}</li>)}</ul>}
    </section>

    {training.testimonials.length > 0 && <section className="section-space page-width"><div className="section-heading"><p className="eyebrow">EXPERIÊNCIAS REAIS</p><h2>Quem já deu o próximo passo.</h2></div><div className="mt-8 grid gap-4 md:grid-cols-3">{training.testimonials.map(item => <figure key={item.name} className="interest-card"><blockquote>{item.quote}</blockquote><figcaption className="mt-4 font-semibold">{item.name}</figcaption></figure>)}</div></section>}

    <section id="oferta" className="section-space page-width grid items-start gap-10 lg:grid-cols-2">
      <div className="section-heading"><p className="eyebrow flex items-center gap-2"><Sparkles className="size-4" /> COMECE PELO CONHECIMENTO</p><h2>Renda IA<br /><span className="text-primary">Guide Easy.</span></h2><p>Explore a inteligência artificial como um caminho para ampliar seu conhecimento digital — sem promessas de ganhos rápidos ou renda garantida.</p><PurchaseLink className="mt-7" /><p className="mt-4 text-xs text-muted-foreground">Você será direcionado à oferta na Hotmart.</p></div>
      <div className="border-y border-border py-2"><h3 className="py-4 text-lg font-semibold">Confira antes de finalizar a compra</h3>{[{ label: "Conteúdo incluído", value: training.extras }, { label: "Preço e pagamento", value: training.price ? `${training.price}${training.payment ? ` · ${training.payment}` : ""}` : training.payment }, { label: "Forma e prazo de acesso", value: training.accessMethod ? `${training.accessMethod}${training.accessPeriod ? ` · ${training.accessPeriod}` : ""}` : training.accessPeriod }, { label: "Condições de garantia", value: training.guarantee }].map(item => <div key={item.label} className="flex items-start justify-between gap-5 border-t border-border py-4 text-sm"><span>{item.label}</span><span className="max-w-[55%] text-right text-muted-foreground">{item.value ?? "Consulte na Hotmart"}</span></div>)}<p className="border-t border-border py-4 text-xs leading-relaxed text-muted-foreground">As informações e condições exibidas pelo produtor na oferta são as referências para sua compra.</p></div>
    </section>

    <section id="faq" className="section-space border-t border-border bg-secondary/30">
      <div className="page-width grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div className="section-heading"><p className="eyebrow">PERGUNTAS FREQUENTES</p><h2>Uma decisão<br />bem informada.</h2><p>Os pontos importantes para conhecer o treinamento antes de comprar.</p></div><div className="border-t border-border">{faqs.map(item => <details key={item.question} className="faq-item group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-semibold"><span>{item.question}</span><Plus className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" /></summary><p className="pb-5 pr-6 text-sm leading-relaxed text-muted-foreground">{item.answer}</p></details>)}</div></div>
    </section>

    <footer className="page-width flex flex-col justify-between gap-5 py-8 text-xs text-muted-foreground sm:flex-row"><span className="font-display font-bold text-foreground">RENDA IA · GUIDE EASY</span><p className="max-w-lg sm:text-right">Esta página contém link de afiliado. Resultados dependem de aplicação, contexto e dedicação individual.</p></footer>
    <div className="mobile-purchase fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur sm:hidden"><PurchaseLink className="w-full">QUERO ACESSAR O TREINAMENTO</PurchaseLink></div>
  </main>;
}

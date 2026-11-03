export const CHECKOUT_URL = "https://go.hotmart.com/X108292328M?dp=1";

type Module = { name: string; description: string; learning: string };
type Tool = { name: string; description: string; conditions: string };
type Testimonial = { name: string; quote: string };

// Fill only with verified information from the producer. Empty values stay unpublished.
export const training = {
  name: "Renda IA Guide Easy",
  modules: [] as Module[],
  tools: [] as Tool[],
  benefits: [] as string[],
  testimonials: [] as Testimonial[],
  audience: null as string | null,
  prerequisites: null as string | null,
  lessonCount: null as number | null,
  extras: null as string | null,
  accessMethod: null as string | null,
  accessPeriod: null as string | null,
  price: null as string | null,
  payment: null as string | null,
  guarantee: null as string | null,
};

export const faqs = [
  { question: "O que é o Renda IA Guide Easy?", answer: "É um treinamento digital sobre inteligência artificial e possibilidades no ambiente digital. Confira a descrição completa na oferta da Hotmart antes de comprar." },
  { question: "Para quem é indicado?", answer: training.audience ?? "Se você quer explorar a inteligência artificial e desenvolver habilidades digitais, confira o público indicado na oferta oficial para avaliar se o treinamento combina com seu momento." },
  { question: "Preciso ter experiência com inteligência artificial?", answer: training.prerequisites ?? "Confira os pré-requisitos e o nível do conteúdo na oferta oficial. A indicação para iniciantes ainda precisa ser confirmada pelo produtor." },
  { question: "O que está incluído no treinamento?", answer: "Consulte a lista de aulas, ferramentas e eventuais materiais na oferta oficial. Apenas os itens descritos pelo produtor fazem parte da compra." },
  { question: "Como e onde funciona o acesso?", answer: training.accessMethod ?? "A compra é realizada pela Hotmart. Consulte na oferta oficial como o conteúdo é disponibilizado e qual é o prazo de acesso." },
  { question: "Quais são as formas de pagamento?", answer: training.payment ?? "O valor e as opções disponíveis devem ser conferidos na página da Hotmart antes de finalizar a compra." },
  { question: "Como funciona a garantia?", answer: training.guarantee ?? "Confira o prazo e as condições de garantia na oferta da Hotmart antes de comprar. Esta página não informa um prazo que não foi confirmado." },
  { question: "O treinamento garante ganhos financeiros?", answer: "Não. Não há promessa de renda ou resultados financeiros garantidos. Resultados dependem de diversos fatores, incluindo aplicação, contexto e dedicação individual." },
];
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is Landyze free to start with?",
    answer: "Yes. You can use the Landyze starter for free and take it to production without vendor lock-in.",
    value: "item-1",
  },
  {
    question: "Is Landyze suitable for agencies or only SaaS?",
    answer:
      "Landyze was designed for agencies, SaaS startups, and product teams — anyone who needs a flexible, reliable Next.js starter.",
    value: "item-2",
  },
  {
    question: "Does it support dark mode, theming, and mobile?",
    answer:
      "Absolutely. Landyze is fully responsive and includes a modern, accessible theme system and dark mode support.",
    value: "item-3",
  },
  {
    question: "Can I use my own auth, payments, or backend?",
    answer: "Yes. Landyze is provider-agnostic and can be extended with your preferred tools and integrations.",
    value: "item-4",
  },
  {
    question: "How quickly can my agency launch with Landyze?",
    answer: "Agencies and SaaS teams often go from zero to production MVP in less than a week using Landyze.",
    value: "item-5",
  },
];

export const LayoutFaqSection = () => {
  return (
    <section id="faq" className="container mx-auto md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Landyze — Agency & product launch Q&amp;A
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
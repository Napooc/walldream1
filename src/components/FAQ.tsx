import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels types de surfaces pouvez-vous habiller ?",
    answer: "Nous travaillons sur tous types de surfaces : murs intérieurs (plâtre, béton, bois), vitrines, portes, cloisons amovibles, et même certaines surfaces extérieures. Nous adaptons nos matériaux et techniques en fonction du support pour garantir une adhésion optimale et une durabilité maximale.",
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer: "La durée d'installation dépend de la surface à couvrir et de la complexité du projet. En moyenne, une installation simple peut prendre entre 1 et 2 jours, tandis qu'un projet plus complexe peut nécessiter jusqu'à une semaine. Nous établissons un planning précis lors de la phase de consultation pour minimiser l'impact sur votre activité.",
  },
  {
    question: "Les impressions murales sont-elles résistantes ?",
    answer: "Absolument ! Nous utilisons des matériaux premium spécialement conçus pour résister à l'usure quotidienne, aux variations de température et à l'humidité. Nos impressions conservent leur éclat pendant de nombreuses années sans décoloration ni détérioration. Nous offrons également des traitements de protection supplémentaires pour les zones à fort passage.",
  },
  {
    question: "Puis-je personnaliser complètement mon design ?",
    answer: "Bien sûr ! Nous encourageons la personnalisation totale. Notre équipe de designers travaille en étroite collaboration avec vous pour créer des visuels uniques qui reflètent parfaitement votre identité de marque. Vous pouvez fournir vos propres designs ou nous confier la création complète selon vos directives.",
  },
  {
    question: "Comment se passe le retrait d'une installation existante ?",
    answer: "Nos impressions peuvent être retirées proprement sans endommager les surfaces. Nous proposons un service de dépose professionnel si vous souhaitez changer votre décor. Le processus est rapide et respectueux de vos murs, permettant une nouvelle installation immédiatement après si souhaité.",
  },
  {
    question: "Quel est le délai pour un projet complet ?",
    answer: "De la consultation initiale à l'installation finale, comptez généralement entre 2 et 4 semaines selon l'ampleur du projet. Ce délai inclut la phase de conception, validation, production et installation. Pour des projets urgents, nous proposons des options accélérées avec des délais réduits.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Questions <span className="bg-gradient-accent bg-clip-text text-transparent">fréquentes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trouvez rapidement les réponses à vos questions les plus courantes.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-accent hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
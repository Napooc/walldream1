import { motion } from "framer-motion";
import { Phone, Palette, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Consultation",
    description: "Échange initial pour comprendre vos besoins et votre vision. Nous analysons votre espace et définissons les objectifs du projet.",
  },
  {
    icon: Palette,
    title: "Conception",
    description: "Notre équipe créative développe des concepts personnalisés adaptés à votre identité de marque et à vos contraintes techniques.",
  },
  {
    icon: Settings,
    title: "Production",
    description: "Impression haute qualité avec des technologies de pointe et des matériaux premium sélectionnés pour leur durabilité.",
  },
  {
    icon: CheckCircle,
    title: "Installation",
    description: "Pose professionnelle réalisée par nos équipes expérimentées, avec un contrôle qualité rigoureux à chaque étape.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Notre <span className="bg-gradient-accent bg-clip-text text-transparent">Processus</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            De l'idée à la réalisation, nous vous accompagnons à chaque étape pour garantir un
            résultat exceptionnel.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-lg bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                  <div className="mb-6 inline-flex rounded-full bg-accent/10 p-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <div className="h-0.5 w-8 bg-gradient-accent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
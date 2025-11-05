import { motion } from "framer-motion";
import { Sparkles, Shield, Leaf, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Impression haute définition",
    description: "Technologies d'impression UV et latex de dernière génération pour des couleurs éclatantes et une netteté exceptionnelle, même sur de très grandes surfaces.",
  },
  {
    icon: Shield,
    title: "Matériaux durables",
    description: "Vinyles premium, textiles techniques et papiers peints intissés résistants à la décoloration, à l'humidité et à l'usure quotidienne.",
  },
  {
    icon: Leaf,
    title: "Approche éco-responsable",
    description: "Encres écologiques sans solvants nocifs, matériaux recyclables et processus de production respectueux de l'environnement.",
  },
  {
    icon: Zap,
    title: "Installation experte",
    description: "Techniques de pose professionnelles garantissant un rendu parfait sans bulles ni défauts, sur tout type de surface.",
  },
];

export const Technology = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Technologie &{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">savoir-faire</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            L'excellence technique au service de votre vision créative
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="rounded-lg bg-gradient-accent p-3">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 rounded-lg bg-gradient-accent p-8 text-center text-accent-foreground"
          >
            <h3 className="mb-4 text-2xl font-bold">Plus de 10 ans d'expertise</h3>
            <p className="mx-auto max-w-2xl text-lg">
              Notre équipe de professionnels passionnés met son savoir-faire au service de votre
              projet pour créer des installations murales qui dépassent vos attentes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
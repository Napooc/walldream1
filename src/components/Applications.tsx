import { motion } from "framer-motion";
import { Building2, ShoppingBag, Coffee, Calendar } from "lucide-react";

const applications = [
  {
    icon: Building2,
    title: "Espaces de bureau",
    description: "Transformez vos bureaux en espaces inspirants qui reflètent votre culture d'entreprise. Idéal pour les halls d'entrée, salles de réunion, open spaces et zones de détente.",
    examples: ["Halls d'accueil", "Salles de conférence", "Espaces collaboratifs", "Zones de pause"],
  },
  {
    icon: ShoppingBag,
    title: "Commerce & Retail",
    description: "Créez une expérience d'achat mémorable qui attire et engage vos clients. Parfait pour les vitrines, murs d'exposition et zones de vente.",
    examples: ["Vitrines commerciales", "Murs d'exposition", "Zones de produits", "Caisses"],
  },
  {
    icon: Coffee,
    title: "Hôtellerie & Restauration",
    description: "Développez une ambiance unique qui fait revenir vos clients. Idéal pour créer une atmosphère cohérente avec votre concept culinaire ou hôtelier.",
    examples: ["Restaurants", "Cafés", "Hôtels", "Bars"],
  },
  {
    icon: Calendar,
    title: "Événementiel",
    description: "Marquez les esprits lors de vos événements avec des installations temporaires ou permanentes qui créent un impact visuel fort et mémorable.",
    examples: ["Salons professionnels", "Stands d'exposition", "Événements corporate", "Lancements"],
  },
];

export const Applications = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Applications</span> et
            secteurs
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Nos solutions d'impression murale s'adaptent à tous les environnements professionnels
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {applications.map((application, index) => {
            const Icon = application.icon;
            return (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="rounded-lg bg-card p-8 shadow-card"
              >
                <div className="mb-4 inline-flex rounded-full bg-accent/10 p-3">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">{application.title}</h3>
                <p className="mb-6 text-muted-foreground">{application.description}</p>
                <div className="flex flex-wrap gap-2">
                  {application.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
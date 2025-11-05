import { motion } from "framer-motion";
import { TrendingUp, Award, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description: "Nos installations murales génèrent un retour sur investissement tangible en augmentant votre visibilité et en renforçant votre image de marque auprès de vos clients.",
  },
  {
    icon: Award,
    title: "Qualité garantie",
    description: "Nous utilisons exclusivement des matériaux premium et des technologies d'impression de pointe pour garantir des résultats exceptionnels qui durent dans le temps.",
  },
  {
    icon: Clock,
    title: "Installation rapide",
    description: "Notre équipe expérimentée assure une installation professionnelle et rapide, minimisant l'impact sur votre activité quotidienne tout en respectant les délais convenus.",
  },
  {
    icon: Users,
    title: "Accompagnement complet",
    description: "De la conception initiale à l'installation finale, notre équipe vous accompagne à chaque étape pour garantir que votre vision devienne réalité.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Pourquoi choisir{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Wall Dream</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Une expertise reconnue au service de votre réussite visuelle
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="mb-6 inline-flex rounded-full bg-gradient-accent p-4">
                  <Icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
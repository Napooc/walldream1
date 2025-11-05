import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
  index: number;
}

export const ServiceCard = ({ title, description, image, onClick, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card
        className="group relative overflow-hidden border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow cursor-pointer"
        onClick={onClick}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
            <span>En savoir plus</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-accent opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-10" />
      </Card>
    </motion.div>
  );
};
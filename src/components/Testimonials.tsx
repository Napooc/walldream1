import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Marketing",
    company: "TechCorp",
    content: "Wall Dream a transformé nos bureaux avec une impression murale époustouflante. L'impact sur nos visiteurs et nos équipes est immédiat. Un travail exceptionnel de A à Z.",
    rating: 5,
  },
  {
    name: "Ahmed Benali",
    role: "Propriétaire",
    company: "Restaurant Le Jardin",
    content: "L'équipe de Wall Dream a parfaitement compris notre vision. Les fresques murales créent une ambiance unique qui enchante nos clients. Un vrai plus pour notre établissement.",
    rating: 5,
  },
  {
    name: "Claire Dubois",
    role: "Responsable Retail",
    company: "Fashion Boutique",
    content: "Service impeccable, délais respectés et qualité irréprochable. Nos vitrines attirent maintenant beaucoup plus de clients. Je recommande vivement leurs services.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Ils nous font <span className="bg-gradient-accent bg-clip-text text-transparent">confiance</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez ce que nos clients disent de leur expérience avec Wall Dream.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="relative h-full p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                <Quote className="absolute right-8 top-8 h-12 w-12 text-accent/20" />
                <div className="mb-4 flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
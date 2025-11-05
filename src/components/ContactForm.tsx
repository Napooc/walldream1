import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Contactez</span>-nous
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Vous avez un projet ? Parlons-en ensemble. Notre équipe est à votre écoute pour
            concrétiser vos idées.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">Nos coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <a href="tel:+212522000000" className="text-muted-foreground hover:text-accent">
                      +212 5 22 00 00 00
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:contact@walldream.ma"
                      className="text-muted-foreground hover:text-accent"
                    >
                      contact@walldream.ma
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">
                      Casablanca, Maroc
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-accent p-8 text-accent-foreground">
              <h4 className="mb-4 text-xl font-bold">Devis gratuit</h4>
              <p className="mb-4">
                Obtenez une estimation gratuite et sans engagement pour votre projet
                d'impression murale.
              </p>
              <p className="text-sm opacity-90">
                Réponse garantie sous 24h ouvrées
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+212 6 00 00 00 00"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet..."
                  className="mt-2 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
                size="lg"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
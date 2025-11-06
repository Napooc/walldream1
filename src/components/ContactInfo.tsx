import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ContactInfo = () => {
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "walldream2025@gmail.com",
      href: "mailto:walldream2025@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "France",
      value: "07 74 59 86 27",
      href: "tel:0774598627",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Phone,
      title: "Suisse",
      value: "+41 77 808 32 70",
      href: "tel:+41778083270",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const handleWhatsAppClick = (country: "france" | "suisse") => {
    const phoneNumber = country === "france" ? "33774598627" : "41778083270";
    const message = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services d'impression murale.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setShowWhatsAppDialog(false);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-background">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Contactez
            </span>
            -nous
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Notre équipe est à votre écoute pour concrétiser vos projets
          </motion.p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-elegant p-8 text-center"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <motion.div
                  className="relative z-10 flex flex-col items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`rounded-full bg-gradient-to-br ${method.color} p-4 shadow-glow`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      {method.title}
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {method.value}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                />
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-glow overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8, delay: 0.7 }}
                >
                  <MessageCircle className="w-16 h-16 mx-auto mb-6" />
                </motion.div>
                
                <motion.h3
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Contactez-nous sur WhatsApp
                </motion.h3>
                
                <motion.p
                  className="text-lg mb-8 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  Une réponse rapide et personnalisée à vos questions
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <Button
                    size="lg"
                    onClick={() => setShowWhatsAppDialog(true)}
                    className="bg-white text-green-600 hover:bg-white/90 shadow-lg font-bold text-lg px-8"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Démarrer une conversation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Country Selection Dialog */}
      <Dialog open={showWhatsAppDialog} onOpenChange={setShowWhatsAppDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Choisissez votre destination
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              onClick={() => handleWhatsAppClick("france")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white h-16 text-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              France: 07 74 59 86 27
            </Button>
            <Button
              onClick={() => handleWhatsAppClick("suisse")}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white h-16 text-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Suisse: +41 77 808 32 70
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

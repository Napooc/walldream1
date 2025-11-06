import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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
            Nos{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Réalisations
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez nos plus beaux projets d'impression murale
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Video container with creative border */}
          <div className="relative group">
            {/* Animated border */}
            <motion.div
              className="absolute -inset-4 bg-gradient-accent opacity-50 blur-xl rounded-3xl"
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

            {/* Video wrapper */}
            <div className="relative overflow-hidden rounded-2xl shadow-elegant border-4 border-accent/20 bg-card">
              <div className="relative aspect-video bg-gradient-to-br from-accent/10 to-primary/10">
                {/* Placeholder - Replace with actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isPlaying ? (
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="relative"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(255, 0, 255, 0.4)",
                            "0 0 0 20px rgba(255, 0, 255, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <div className="flex items-center justify-center w-24 h-24 bg-gradient-accent rounded-full shadow-glow">
                          <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
                        </div>
                      </motion.div>
                    </motion.button>
                  ) : (
                    <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Vidéo à intégrer ici (YouTube, Vimeo, ou fichier vidéo)
                      </p>
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1.5, 1, 1.5],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats below video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {[
              { number: "500+", label: "Projets réalisés" },
              { number: "98%", label: "Clients satisfaits" },
              { number: "15+", label: "Années d'expérience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-card border border-border/50 shadow-card"
              >
                <motion.p
                  className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Projet Bureau Moderne",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop",
    videoUrl: "", // Add your video URL here
  },
  {
    id: 2,
    title: "Restaurant Gastronomique",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=450&fit=crop",
    videoUrl: "", // Add your video URL here
  },
  {
    id: 3,
    title: "Commerce de Luxe",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop",
    videoUrl: "", // Add your video URL here
  },
];

export const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Video className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Découvrez nos réalisations</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Nos Réalisations
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Plongez dans l'univers de nos créations murales exceptionnelles
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-elegant cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                {/* Video thumbnail */}
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Play button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <div className="relative w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-glow">
                        <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Video title */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-sm font-semibold">Voir le projet</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative border */}
              <div className="absolute -inset-0.5 bg-gradient-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur" />
            </motion.div>
          ))}
        </div>

        {/* Note for video integration */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Ajoutez vos URLs vidéo dans VideoSection.tsx pour activer la lecture
        </motion.p>
      </div>
    </section>
  );
};

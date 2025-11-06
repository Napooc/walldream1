import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-mur-impression-bureau-01.webp";
import heroImage2 from "@/assets/hero-mur-impression-commerce-02.webp";
import heroImage3 from "@/assets/hero-mur-impression-restaurant-03.webp";

const slides = [
  {
    image: heroImage1,
    title: "Impression murale professionnelle",
    subtitle: "Création et pose de décors grand format pour entreprises et commerces",
  },
  {
    image: heroImage2,
    title: "Un impact visuel immédiat",
    subtitle: "Transformez vos espaces avec des solutions d'impression murale de haute qualité",
  },
  {
    image: heroImage3,
    title: "Votre partenaire créatif",
    subtitle: "Du concept à l'installation, nous donnons vie à vos idées",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 1.25; // 100% / 8s * 100ms = 1.25% per 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.img
          src="/logo.png"
          alt="Wall Dream Logo"
          className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white pt-32">
        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-5xl font-bold md:text-7xl"
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          key={`subtitle-${currentSlide}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8 max-w-2xl text-lg md:text-xl"
        >
          {slides[currentSlide].subtitle}
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Demander un devis
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Nos services
          </Button>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-white/20 hover:text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          className="text-white hover:bg-white/20 hover:text-white"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-white/20 hover:text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
            className="group relative h-1 w-16 overflow-hidden rounded-full bg-white/30"
          >
            <div
              className="h-full bg-accent transition-all duration-100"
              style={{
                width: index === currentSlide ? `${progress}%` : index < currentSlide ? "100%" : "0%",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
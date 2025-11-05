import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Placeholder images - In production, replace with real project images
const galleryItems = [
  { id: 1, category: "bureau", image: "/placeholder.svg", title: "Siège social moderne" },
  { id: 2, category: "commerce", image: "/placeholder.svg", title: "Boutique de luxe" },
  { id: 3, category: "restaurant", image: "/placeholder.svg", title: "Restaurant gastronomique" },
  { id: 4, category: "evenement", image: "/placeholder.svg", title: "Stand événementiel" },
  { id: 5, category: "bureau", image: "/placeholder.svg", title: "Open space créatif" },
  { id: 6, category: "commerce", image: "/placeholder.svg", title: "Showroom automobile" },
  { id: 7, category: "restaurant", image: "/placeholder.svg", title: "Café contemporain" },
  { id: 8, category: "evenement", image: "/placeholder.svg", title: "Salon professionnel" },
  { id: 9, category: "bureau", image: "/placeholder.svg", title: "Salle de réunion" },
];

const categories = [
  { id: "tous", label: "Tous" },
  { id: "bureau", label: "Bureau" },
  { id: "commerce", label: "Commerce" },
  { id: "restaurant", label: "Restauration" },
  { id: "evenement", label: "Événement" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("tous");

  const filteredItems =
    activeCategory === "tous"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Nos <span className="bg-gradient-accent bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez quelques-uns de nos projets d'impression murale réalisés pour nos clients.
          </p>
        </div>

        <Tabs defaultValue="tous" className="w-full">
          <TabsList className="mx-auto mb-12 flex w-full max-w-2xl justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="flex-1"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-card"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm">Cliquer pour agrandir</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="h-auto w-full"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-6 text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
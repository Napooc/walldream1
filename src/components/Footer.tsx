import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Wall</span>Dream
            </h3>
            <p className="mb-4 text-white/80">
              Spécialiste de l'impression murale professionnelle pour entreprises et commerces.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 transition-colors hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 transition-colors hover:text-accent">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/80 transition-colors hover:text-accent">
                  Notre processus
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 transition-colors hover:text-accent">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 transition-colors hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-bold">Nos services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Impression murale bureau</li>
              <li>Décoration commerce</li>
              <li>Habillage restaurant</li>
              <li>Solutions événementielles</li>
              <li>Signalétique intérieure</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+212522000000" className="text-white/80 hover:text-accent">
                  +212 5 22 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:contact@walldream.ma" className="text-white/80 hover:text-accent">
                  contact@walldream.ma
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Wall Dream. Tous droits réservés.</p>
          <p className="mt-2">
            Impression murale professionnelle - Maroc
          </p>
        </div>
      </div>
    </footer>
  );
};
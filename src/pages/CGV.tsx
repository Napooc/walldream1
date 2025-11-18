import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getCountryFromDomain } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileText, Shield, CreditCard, Truck, RefreshCw, Scale } from "lucide-react";

const CGV = () => {
  const country = getCountryFromDomain();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentFrance = {
    title: "Conditions Générales de Vente",
    subtitle: "Wall Dream France - En vigueur au 01/01/2025",
    companyInfo: {
      title: "Informations Légales",
      content: `Wall Dream France
Spécialiste de l'impression murale professionnelle
Email: walldream2025@gmail.com
Téléphone: 07 74 59 86 27`
    },
    sections: [
      {
        icon: FileText,
        title: "1. Objet et Champ d'Application",
        content: `Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations commerciales entre Wall Dream France, ci-après dénommée "le Prestataire", et toute personne physique ou morale, ci-après dénommée "le Client", souhaitant bénéficier des services d'impression murale professionnelle proposés par Wall Dream.

Ces CGV s'appliquent à toutes nos prestations incluant :
• Impression murale grand format pour bureaux et espaces professionnels
• Décoration murale personnalisée pour commerces et boutiques
• Habillage mural pour restaurants, hôtels et établissements de restauration
• Solutions décoratives pour événements professionnels et salons
• Signalétique intérieure et extérieure sur mesure
• Création graphique et conseil en aménagement d'espace

Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent sur tout autre document du Client.`
      },
      {
        icon: CreditCard,
        title: "2. Devis et Commande",
        content: `2.1 Établissement du Devis
Tout projet débute par une demande de devis gratuit et sans engagement. Le devis détaille :
• Les dimensions précises et surfaces à couvrir
• Le type de support et de matériau sélectionné
• Les spécifications techniques de l'impression
• Les délais de réalisation et d'installation
• Le prix détaillé (fourniture, impression, pose)
• Les conditions de règlement

Le devis est valable 30 jours à compter de sa date d'émission.

2.2 Validation de Commande
La commande n'est définitive qu'après :
• Signature du devis par le Client avec mention "Bon pour accord"
• Versement de l'acompte de 40% du montant total TTC
• Validation finale des visuels et fichiers d'impression par le Client

Toute modification demandée après validation entraînera un nouveau devis.`
      },
      {
        icon: Shield,
        title: "3. Prix et Conditions de Paiement",
        content: `3.1 Prix
Nos prix sont indiqués en euros, toutes taxes comprises (TTC). Ils incluent :
• La préparation et le traitement des fichiers graphiques
• L'impression haute définition sur supports professionnels
• Les frais de déplacement dans un rayon de 50km
• La pose professionnelle par nos équipes qualifiées
• La garantie sur la qualité d'impression et de pose

Les frais supplémentaires (déplacement hors zone, travaux préparatoires, dépose d'ancien revêtement) sont facturés en sus et indiqués sur le devis.

3.2 Modalités de Règlement
• Acompte de 40% à la commande
• Solde de 60% à la réalisation, avant installation
• Paiement par virement bancaire, chèque ou espèces (jusqu'à 1000€)
• Délai de paiement : comptant ou selon accord préalable

Tout retard de paiement entraînera de plein droit :
• Application de pénalités de retard au taux BCE + 10 points
• Indemnité forfaitaire de 40€ pour frais de recouvrement
• Suspension des prestations en cours`
      },
      {
        icon: Truck,
        title: "4. Délais et Exécution",
        content: `4.1 Délais de Réalisation
Les délais indicatifs sont :
• Création graphique : 3 à 7 jours ouvrés
• Production et impression : 5 à 10 jours ouvrés
• Installation : selon planning convenu (1 à 3 jours)

Ces délais courent à compter de la validation définitive des fichiers et de la réception de l'acompte.

4.2 Préparation du Chantier
Le Client s'engage à :
• Fournir un local propre, sec et accessible
• Assurer la présence d'électricité et d'éclairage suffisant
• Dégager les surfaces à traiter de tout obstacle
• Informer de tout défaut du support (humidité, fissures)

Tout retard imputable au Client entraînera une facturation des frais d'immobilisation à 150€/jour.

4.3 Réception des Travaux
À l'issue de l'installation, un procès-verbal de réception est signé. Les réserves éventuelles doivent être formulées par écrit dans les 48h suivant la réception.`
      },
      {
        icon: RefreshCw,
        title: "5. Garanties et Responsabilités",
        content: `5.1 Garantie Qualité
Wall Dream garantit :
• La qualité professionnelle de l'impression (résolution, colorimétrie)
• La conformité des supports aux spécifications techniques
• La tenue dans le temps selon usage normal (3 à 7 ans selon support)
• La pose professionnelle sans défaut apparent

5.2 Limites de Garantie
La garantie ne couvre pas :
• Les dommages résultant d'un usage anormal ou abusif
• Les détériorations causées par chocs, rayures, produits chimiques
• Les décolorations liées à l'exposition directe au soleil
• Les décollements dus à l'humidité préexistante du support
• Les interventions de tiers non autorisés

5.3 Responsabilité
Notre responsabilité est limitée au montant de la prestation facturée. Elle ne peut être engagée pour les préjudices indirects (perte d'exploitation, manque à gagner).`
      },
      {
        icon: FileText,
        title: "6. Propriété Intellectuelle",
        content: `6.1 Droits sur les Créations
Les créations graphiques réalisées par Wall Dream restent notre propriété exclusive. Le Client acquiert uniquement un droit d'usage pour la destination convenue.

6.2 Fichiers Clients
Le Client garantit détenir tous les droits sur les visuels fournis (photos, logos, illustrations). Il s'engage à nous garantir contre toute action en contrefaçon.

Nous nous réservons le droit de refuser l'impression de visuels :
• Portant atteinte aux droits de tiers
• À caractère discriminatoire, diffamatoire ou illicite
• Violant les droits d'auteur ou marques déposées

6.3 Utilisation des Réalisations
Sauf opposition écrite du Client, nous nous réservons le droit d'utiliser les photographies de nos réalisations à des fins publicitaires et commerciales.`
      },
      {
        icon: Scale,
        title: "7. Droit de Rétractation et Annulation",
        content: `7.1 Prestations Professionnelles BtoB
Conformément à l'article L221-3 du Code de la consommation, le droit de rétractation de 14 jours ne s'applique pas aux contrats conclus entre professionnels.

7.2 Annulation de Commande
En cas d'annulation par le Client :
• Avant validation finale des fichiers : restitution de 70% de l'acompte
• Après validation, avant impression : restitution de 40% de l'acompte
• Après début d'impression : aucun remboursement, facturation intégrale

7.3 Force Majeure
En cas de force majeure (catastrophe naturelle, grève, épidémie), nos obligations sont suspendues sans indemnisation possible.`
      },
      {
        icon: Shield,
        title: "8. Protection des Données",
        content: `Conformément au RGPD et à la loi Informatique et Libertés, les données collectées sont nécessaires au traitement de votre commande. Vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à walldream2025@gmail.com.

Les données sont conservées pendant la durée légale de 10 ans (obligations comptables) puis supprimées.`
      },
      {
        icon: Scale,
        title: "9. Litiges et Médiation",
        content: `9.1 Droit Applicable
Les présentes CGV sont régies par le droit français.

9.2 Règlement Amiable
En cas de litige, nous privilégions une résolution amiable. Le Client peut nous contacter à walldream2025@gmail.com pour toute réclamation.

9.3 Médiation
Conformément à l'article L.612-1 du Code de la consommation, nous proposons un dispositif de médiation de la consommation pour faciliter le règlement amiable des litiges.

9.4 Juridiction Compétente
À défaut d'accord amiable, compétence exclusive est attribuée aux tribunaux français compétents, nonobstant pluralité de défendeurs ou appel en garantie.`
      }
    ]
  };

  const contentSuisse = {
    title: "Conditions Générales de Vente",
    subtitle: "Wall Dream Suisse - En vigueur au 01/01/2025",
    companyInfo: {
      title: "Informations Légales",
      content: `Wall Dream Suisse
Spécialiste de l'impression murale professionnelle
Email: walldream2025@gmail.com
Téléphone: +41 77 808 32 70`
    },
    sections: [
      {
        icon: FileText,
        title: "1. Objet et Champ d'Application",
        content: `Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations commerciales entre Wall Dream Suisse, ci-après dénommée "le Prestataire", et toute personne physique ou morale, ci-après dénommée "le Client", souhaitant bénéficier des services d'impression murale professionnelle proposés par Wall Dream.

Ces CGV s'appliquent à toutes nos prestations incluant :
• Impression murale grand format pour bureaux et espaces professionnels
• Décoration murale personnalisée pour commerces et boutiques
• Habillage mural pour restaurants, hôtels et établissements de restauration
• Solutions décoratives pour événements professionnels et salons
• Signalétique intérieure et extérieure sur mesure
• Création graphique et conseil en aménagement d'espace

Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent sur tout autre document du Client.`
      },
      {
        icon: CreditCard,
        title: "2. Offre et Commande",
        content: `2.1 Établissement de l'Offre
Tout projet débute par une demande d'offre gratuite et sans engagement. L'offre détaille :
• Les dimensions précises et surfaces à couvrir
• Le type de support et de matériau sélectionné
• Les spécifications techniques de l'impression
• Les délais de réalisation et d'installation
• Le prix détaillé (fourniture, impression, pose)
• Les conditions de règlement

L'offre est valable 30 jours à compter de sa date d'émission.

2.2 Validation de Commande
La commande n'est définitive qu'après :
• Signature de l'offre par le Client avec mention "Bon pour accord"
• Versement de l'acompte de 40% du montant total TTC
• Validation finale des visuels et fichiers d'impression par le Client

Toute modification demandée après validation entraînera une nouvelle offre.`
      },
      {
        icon: Shield,
        title: "3. Prix et Conditions de Paiement",
        content: `3.1 Prix
Nos prix sont indiqués en francs suisses (CHF), TVA comprise. Ils incluent :
• La préparation et le traitement des fichiers graphiques
• L'impression haute définition sur supports professionnels
• Les frais de déplacement dans un rayon de 50km
• La pose professionnelle par nos équipes qualifiées
• La garantie sur la qualité d'impression et de pose

Les frais supplémentaires (déplacement hors zone, travaux préparatoires, dépose d'ancien revêtement) sont facturés en sus et indiqués sur l'offre.

3.2 Modalités de Règlement
• Acompte de 40% à la commande
• Solde de 60% à la réalisation, avant installation
• Paiement par virement bancaire, TWINT, ou chèque
• Délai de paiement : comptant ou selon accord préalable

Tout retard de paiement entraînera de plein droit :
• Application d'un intérêt moratoire de 5% par an
• Indemnité forfaitaire de CHF 40.- pour frais de recouvrement
• Suspension des prestations en cours`
      },
      {
        icon: Truck,
        title: "4. Délais et Exécution",
        content: `4.1 Délais de Réalisation
Les délais indicatifs sont :
• Création graphique : 3 à 7 jours ouvrables
• Production et impression : 5 à 10 jours ouvrables
• Installation : selon planning convenu (1 à 3 jours)

Ces délais courent à compter de la validation définitive des fichiers et de la réception de l'acompte.

4.2 Préparation du Chantier
Le Client s'engage à :
• Fournir un local propre, sec et accessible
• Assurer la présence d'électricité et d'éclairage suffisant
• Dégager les surfaces à traiter de tout obstacle
• Informer de tout défaut du support (humidité, fissures)

Tout retard imputable au Client entraînera une facturation des frais d'immobilisation à CHF 200.-/jour.

4.3 Réception des Travaux
À l'issue de l'installation, un procès-verbal de réception est signé. Les réserves éventuelles doivent être formulées par écrit dans les 48 heures suivant la réception.`
      },
      {
        icon: RefreshCw,
        title: "5. Garanties et Responsabilités",
        content: `5.1 Garantie Qualité
Wall Dream garantit :
• La qualité professionnelle de l'impression (résolution, colorimétrie)
• La conformité des supports aux spécifications techniques
• La tenue dans le temps selon usage normal (3 à 7 ans selon support)
• La pose professionnelle sans défaut apparent

5.2 Limites de Garantie
La garantie ne couvre pas :
• Les dommages résultant d'un usage anormal ou abusif
• Les détériorations causées par chocs, rayures, produits chimiques
• Les décolorations liées à l'exposition directe au soleil
• Les décollements dus à l'humidité préexistante du support
• Les interventions de tiers non autorisés

5.3 Responsabilité
Notre responsabilité est limitée au montant de la prestation facturée. Elle ne peut être engagée pour les préjudices indirects (perte d'exploitation, manque à gagner).`
      },
      {
        icon: FileText,
        title: "6. Propriété Intellectuelle",
        content: `6.1 Droits sur les Créations
Les créations graphiques réalisées par Wall Dream restent notre propriété exclusive. Le Client acquiert uniquement un droit d'usage pour la destination convenue.

6.2 Fichiers Clients
Le Client garantit détenir tous les droits sur les visuels fournis (photos, logos, illustrations). Il s'engage à nous garantir contre toute action en contrefaçon.

Nous nous réservons le droit de refuser l'impression de visuels :
• Portant atteinte aux droits de tiers
• À caractère discriminatoire, diffamatoire ou illicite
• Violant les droits d'auteur ou marques déposées

6.3 Utilisation des Réalisations
Sauf opposition écrite du Client, nous nous réservons le droit d'utiliser les photographies de nos réalisations à des fins publicitaires et commerciales.`
      },
      {
        icon: Scale,
        title: "7. Droit de Révocation et Annulation",
        content: `7.1 Prestations Professionnelles BtoB
Le droit de révocation ne s'applique pas aux contrats conclus entre professionnels conformément au Code suisse des obligations.

7.2 Annulation de Commande
En cas d'annulation par le Client :
• Avant validation finale des fichiers : restitution de 70% de l'acompte
• Après validation, avant impression : restitution de 40% de l'acompte
• Après début d'impression : aucun remboursement, facturation intégrale

7.3 Force Majeure
En cas de force majeure (catastrophe naturelle, grève, épidémie), nos obligations sont suspendues sans indemnisation possible.`
      },
      {
        icon: Shield,
        title: "8. Protection des Données",
        content: `Conformément à la Loi fédérale sur la protection des données (LPD), les données collectées sont nécessaires au traitement de votre commande. Vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à walldream2025@gmail.com.

Les données sont conservées pendant la durée légale de 10 ans (obligations comptables) puis supprimées.`
      },
      {
        icon: Scale,
        title: "9. Litiges et For Juridique",
        content: `9.1 Droit Applicable
Les présentes CGV sont régies par le droit suisse.

9.2 Règlement Amiable
En cas de litige, nous privilégions une résolution amiable. Le Client peut nous contacter à walldream2025@gmail.com pour toute réclamation.

9.3 Médiation
En cas de différend, les parties peuvent recourir à une procédure de médiation avant toute action judiciaire.

9.4 For Juridique
Le for juridique exclusif est celui du siège de Wall Dream Suisse, sous réserve de recours au Tribunal fédéral conformément au droit suisse.`
      }
    ]
  };

  const content = country === 'suisse' ? contentSuisse : contentFrance;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <Scale className="w-16 h-16 text-accent mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-muted-foreground text-lg">{content.subtitle}</p>
          </motion.div>

          {/* Company Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 mb-12 border border-border shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              {content.companyInfo.title}
            </h2>
            <pre className="whitespace-pre-wrap font-sans text-muted-foreground leading-relaxed">
              {content.companyInfo.content}
            </pre>
          </motion.div>

          {/* CGV Sections */}
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <section.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>{section.title}</span>
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-2xl p-8 border border-accent/20"
          >
            <h3 className="text-xl font-bold mb-4">Des Questions ?</h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos conditions générales de vente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:walldream2025@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                Contactez-nous par Email
              </a>
              <a
                href={country === 'suisse' ? 'tel:+41778083270' : 'tel:+33774598627'}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
              >
                Appelez-nous
              </a>
            </div>
          </motion.div>

          {/* Last Update */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>Dernière mise à jour : 01 janvier 2025</p>
            <p className="mt-2">
              Wall Dream se réserve le droit de modifier ces CGV à tout moment. 
              Les CGV applicables sont celles en vigueur à la date de la commande.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGV;
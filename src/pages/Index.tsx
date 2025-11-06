import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Applications } from "@/components/Applications";
import { Technology } from "@/components/Technology";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Team } from "@/components/Team";
import { VideoSection } from "@/components/VideoSection";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";
import { OpeningAnimation } from "@/components/OpeningAnimation";
import { Helmet } from "react-helmet";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wall Dream",
    description:
      "Impression murale professionnelle : création et pose de décors grand format pour entreprises et commerces",
    url: "https://walldream.ma",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-522-000000",
      contactType: "Service client",
      areaServed: "MA",
      availableLanguage: ["fr", "ar"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    service: {
      "@type": "Service",
      serviceType: "Impression murale professionnelle",
      provider: {
        "@type": "Organization",
        name: "Wall Dream",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Wall Dream - Impression Murale Professionnelle Maroc</title>
        <meta
          name="description"
          content="Impression murale professionnelle : création et pose de décors grand format pour entreprises et commerces. Impact visuel immédiat, image de marque forte."
        />
        <meta
          name="keywords"
          content="impression murale, décoration murale, impression grand format, habillage mural, Maroc, Casablanca"
        />
        <meta property="og:title" content="Wall Dream - Impression Murale Professionnelle" />
        <meta
          property="og:description"
          content="Spécialiste de l'impression murale professionnelle pour entreprises et commerces au Maroc."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen">
        <OpeningAnimation />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Benefits />
          <Process />
          <Applications />
          <Technology />
          <Gallery />
          <Team />
          <VideoSection />
          <Testimonials />
          <FAQ />
          <ContactInfo />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
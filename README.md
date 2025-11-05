# Wall Dream - Site Vitrine

Site vitrine moderne et élégant pour Wall Dream, spécialiste de l'impression murale professionnelle au Maroc.

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque UI moderne
- **Vite** - Build tool ultra-rapide
- **TypeScript** - Type safety
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides et performantes
- **Shadcn/ui** - Composants UI accessibles
- **React Router** - Navigation
- **Lucide React** - Icônes

## ✨ Fonctionnalités

### Design & UX
- Hero plein écran avec diaporama automatique (8s)
- Navigation responsive avec scroll behavior
- 6 cartes de services avec modales détaillées
- Galerie filtrable par catégorie
- Animations subtiles et professionnelles
- Design system cohérent avec tokens personnalisés

### Sections
1. **Hero** - Diaporama immersif avec parallaxe
2. **Services** - 6 services clés avec modales interactives
3. **Processus** - 4 étapes de réalisation
4. **Galerie** - Projets filtrables par type
5. **Témoignages** - Avis clients
6. **FAQ** - Questions fréquentes (SEO)
7. **Contact** - Formulaire avec validation
8. **Footer** - Informations complètes

### SEO
- Meta tags complets (title, description, keywords)
- Open Graph et Twitter Cards
- JSON-LD Schema.org
- Sitemap.xml
- Robots.txt
- Balises sémantiques HTML5
- Images avec alt descriptifs

### Performance
- Images WebP optimisées
- Lazy loading
- Animations optimisées avec Framer Motion
- Build optimisé avec Vite
- Code splitting automatique

## 📦 Installation

```bash
# Cloner le projet
git clone <votre-repo>
cd wall-dream

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement

### Vercel (Recommandé)
1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository GitHub
3. Importer le projet
4. Vercel détecte automatiquement Vite
5. Déployer !

### Netlify
1. Créer un compte sur [Netlify](https://netlify.com)
2. Glisser-déposer le dossier `dist` après `npm run build`
3. Ou connecter votre repository pour déploiement continu

### Configuration build
```
Build command: npm run build
Output directory: dist
Node version: 18.x
```

## 🎨 Personnalisation

### Design System
Tous les styles sont centralisés dans :
- `src/index.css` - Tokens CSS (couleurs, ombres, gradients)
- `tailwind.config.ts` - Configuration Tailwind

### Couleurs principales
- **Primary**: Noir élégant (#000)
- **Accent**: Or/Cuivre (#DAA520)
- **Background**: Blanc pur (#FFF)

### Images
Les images sont stockées dans `src/assets/` et importées en ES6.
Pour remplacer :
1. Ajouter vos images dans `src/assets/`
2. Utiliser des noms SEO-friendly (ex: `mur-impression-bureau-casablanca.webp`)
3. Mettre à jour les imports dans les composants

### Contenu
- Textes : Modifier directement dans les composants
- Services : `src/components/Services.tsx`
- Témoignages : `src/components/Testimonials.tsx`
- FAQ : `src/components/FAQ.tsx`
- Processus : `src/components/Process.tsx`

## 📝 Checklist SEO

- ✅ Meta tags (title, description)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ JSON-LD Schema
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Balises sémantiques HTML5
- ✅ Images avec alt
- ✅ Langue HTML (fr)
- ✅ Canonical URL
- ⚠️ Google Analytics (à configurer)
- ⚠️ Google Search Console (à configurer)

## 🎯 Performance

### Objectifs
- LCP (Largest Contentful Paint) : < 2.5s
- FID (First Input Delay) : < 100ms
- CLS (Cumulative Layout Shift) : < 0.1
- Lighthouse Score : > 90

### Optimisations
- Images WebP avec lazy loading
- Code splitting automatique
- Tree shaking
- Minification CSS/JS
- Préchargement des polices
- Animations GPU-accelerated

## 📱 Responsive

Le site est entièrement responsive avec breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build production
npm run preview      # Prévisualiser build
npm run lint         # Linter ESLint
```

## 📞 Support

Pour toute question ou personnalisation :
- Email : contact@walldream.ma
- Téléphone : +212 5 22 00 00 00

## 📄 Licence

© 2025 Wall Dream. Tous droits réservés.

---

**Note importante** : Avant le déploiement en production, pensez à :
1. Remplacer les images placeholder de la galerie par de vraies photos
2. Configurer Google Analytics
3. Configurer les formulaires de contact avec un service backend
4. Vérifier tous les liens et informations de contact
5. Tester sur tous les navigateurs principaux
6. Valider l'accessibilité (WCAG AA)
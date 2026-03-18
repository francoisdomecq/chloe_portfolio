# Portfolio — Chloé Gaillard

Site portfolio d'une designer graphique. Objectif : présenter ses projets de manière professionnelle, claire et visuellement impactante. Le site doit refléter son identité créative tout en restant lisible et performant.

URL de production : https://chloe-gaillard.com/

---

## Stack technique

- **Framework** : React 18+ avec Vite
- **Styling** : CSS avec SCSS
- **Animations** : Framer Motion + animations CSS
- **Langage** : TypeScript strict (pas de `any`)
- **Routing** : React Router v6
- **Déploiement** : Netlify

## Commandes

- `pnpm dev` — serveur de développement
- `pnpm build` — build de production
- `pnpm preview` — prévisualiser le build
- `pnpm lint` — linter ESLint
- `pnpm typecheck` — vérification TypeScript (`tsc --noEmit`)

## Conventions de code

### Composants React
- Un composant par fichier, nommé en PascalCase
- Chaque composant dans son propre dossier avec son `.scss`
- Functional components uniquement, avec hooks
- Props typées avec une interface dans le même fichier (ou `.types.ts` si complexe)
- Pas de logique métier dans les composants — extraire dans des hooks ou utils

### SCSS Modules
- Un fichier `.scss` par composant, co-localisé dans le même dossier
- Utiliser les variables SCSS de `styles/_variables.scss` — ne jamais hardcoder couleurs, tailles ou breakpoints
- Nommage des classes en BEM
- Mobile-first : écrire les styles mobile par défaut, ajouter les breakpoints avec `@include` pour tablet et desktop
- Pas de `!important` sauf cas extrême documenté

### Breakpoints responsive (mobile-first)
```scss
$breakpoints: (
  sm: 640px,   // Mobile large
  md: 768px,   // Tablette
  lg: 1024px,  // Desktop
  xl: 1440px   // Grand écran
);

@mixin respond-to($bp) {
  @media (min-width: map-get($breakpoints, $bp)) { @content; }
}

// Utilisation :
.container {
  padding: 1rem;
  @include respond-to(md) { padding: 2rem; }
  @include respond-to(lg) { padding: 4rem; }
}
```

### Animations — Framer Motion
- Utiliser Framer Motion pour les animations d'entrée, transitions de page et interactions
- Créer un fichier `src/utils/animations.ts` avec les variants réutilisables
- Privilégier `transform` et `opacity` (propriétés GPU-accelerated)
- Toujours respecter `prefers-reduced-motion` :
  ```tsx
  const prefersReducedMotion = useReducedMotion();
  ```
- Durées standard :
    - Micro-interactions : 150–250ms
    - Entrées d'éléments : 400–600ms
    - Transitions de page : 300–500ms
- Easing : utiliser `[0.25, 0.1, 0.25, 1]` (ease-out) pour les entrées, `[0.4, 0, 0.2, 1]` pour les transitions

### Animations CSS
- Réservées aux animations simples et répétitives (hover, loading, pulse)
- Définir les keyframes dans le `.module.scss` du composant concerné
- Pas de duplication : si une animation est utilisée dans 2+ composants, la déplacer dans `_mixins.scss`

---

## Design — Règles fondamentales

### C'est un portfolio de designer graphique
Le site EST la vitrine du travail de Chloé. Chaque choix de design doit :
1. **Mettre les projets au premier plan** — le site ne doit pas voler la vedette au travail présenté
2. **Être visuellement soigné** — la qualité du site reflète la qualité de la designer
3. **Rester lisible et navigable** — pas de surcharge visuelle, hiérarchie claire

### Typographie
- Hiérarchie typographique claire : max 2 fonts (une display, une body)
- Tailles responsives avec `clamp()` :
  ```scss
  $font-sizes: (
    h1: clamp(2.5rem, 5vw, 4.5rem),
    h2: clamp(1.8rem, 3vw, 2.5rem),
    body: clamp(1rem, 1.2vw, 1.125rem),
  );
  ```

### Images
- Toutes les images de projets en WebP avec fallback
- Utiliser `loading="lazy"` sur les images below-the-fold
- Toujours fournir `width` et `height` pour éviter le layout shift
- Prévoir des placeholders (blur ou couleur dominante) pendant le chargement

### Espacement
- Utiliser un système de spacing basé sur des multiples de 8px :
  ```scss
  $spacing: (
    xs: 0.5rem,   // 8px
    sm: 1rem,     // 16px
    md: 1.5rem,   // 24px
    lg: 2rem,     // 32px
    xl: 3rem,     // 48px
    2xl: 4rem,    // 64px
    3xl: 6rem,    // 96px
  );
  ```

### Couleurs
- Définir une palette dans `_variables.scss` avec des noms sémantiques (`$color-text-primary`, `$color-bg-main`, `$color-accent`)
- Prévoir un mode clair cohérent (mode sombre optionnel mais pas prioritaire)

---

## Performance

- Score Lighthouse cible : 90+ sur toutes les métriques
- Lazy load des images et des composants lourds (`React.lazy` + `Suspense`)
- Pas de dépendances inutiles — vérifier la taille du bundle avant d'ajouter un package
- Optimiser les fonts : `font-display: swap`, subset si possible
- Préférer les SVG inline pour les icônes

---

## SEO & Accessibilité

- Chaque page a un `<title>` et une `<meta description>` uniques
- Balises sémantiques : `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Images : toujours un `alt` descriptif
- Contraste WCAG AA minimum (ratio 4.5:1 pour le texte)
- Navigation au clavier fonctionnelle
- `aria-label` sur les éléments interactifs sans texte visible

---

## Ce qu'il ne faut PAS faire

- Ne pas utiliser de templates génériques — chaque section doit être pensée sur mesure
- Ne pas ajouter d'animations juste pour l'effet — chaque animation doit guider l'œil ou informer
- Ne pas hardcoder du texte — tout le contenu textuel passe par `config/i18n/<>.json` et les données projets passent par `src/config/works.json`
- Ne pas modifier les assets originaux (images sources dans `publics/projects/..`)
- Ne jamais committer de fichiers `.env`
- Ne pas installer de packages sans vérifier la taille avec `bundlephobia.com`

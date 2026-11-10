# Design System — Landing page « Powerful »

Style **minimaliste, sombre et chaleureux**, de type éditorial / premium.

## 1. Palette de couleurs

| Rôle | Valeur approx. | Usage |
|---|---|---|
| **Background** | `#0F1112` | Fond principal (quasi-noir, légèrement bleuté) |
| **Surface** | `#1A1C1D` | Cartes du bas (Products, Features, Contact) |
| **Surface élevée** | `#242628` | Variation de profondeur des cartes |
| **Texte principal** | `#E8E0D5` | Titre « Powerful », sous-titre, liens |
| **Texte secondaire** | `#B5ADA3` | Navigation, labels |
| **Accent chaud (bois)** | `#A57A4C` | Sol, pieds du canapé, tons des images |
| **Bordure** | `rgba(232,224,213,0.5)` | Boutons « outline » |

**Principe :** fond noir + texte crème (jamais blanc pur) + une seule couleur chaude venant des photos.

## 2. Typographie

- **Famille :** sans-serif géométrique/néo-grotesque (type *Inter*, *SF Pro* ou *Helvetica Neue*).
- **Hero (H1) :** ultra-large, graisse Semi-Bold/Bold (600–700), interlettrage serré (`letter-spacing: -0.04em`), `line-height: 0.9`.
- **Sous-titre :** ~28–32px, Regular (400), `line-height: 1.25`.
- **Navigation / boutons :** ~18–20px, Regular.
- **Titres de cartes :** ~26px, Regular.

| Niveau | Taille | Poids |
|---|---|---|
| H1 Hero | `clamp(120px, 18vw, 240px)` | 600 |
| Body large | 28px | 400 |
| Nav / bouton | 18px | 400 |
| Card title | 26px | 400 |

## 3. Espacements & grille

- **Base :** unité de **8px**.
- **Marges latérales :** ~150px (12,5 % de la largeur) en desktop.
- **Grille :** conteneur centré ~900–1000px de large, 12 colonnes.
- **Cartes du bas :** grille de **3 colonnes égales**, gap ~4px (quasi collées).
- **Espacement vertical :** généreux entre header → hero → contenu (≈ 64–96px).

## 4. Composants

### Navbar
- Logo losange (◆) crème + label « Home » à gauche
- Liens centrés : Home · About · Contact
- Bouton **Sign In** à droite, en pilule outline

### Boutons (pill outline)
- `border: 1px solid` crème semi-transparent
- `border-radius: 999px`
- `padding: 14px 28px`
- Fond transparent, texte crème
- Variante avec chevron `›` (« Get Started »)

### Cartes (Products / Features / Contact)
- `border-radius: 16–20px`
- Fond sombre, texte en haut à gauche
- Image produit alignée en bas à droite, fondue dans le fond
- Dégradé vertical vers le noir en bas de page

## 5. Style visuel

- **Rayons :** 16–20px (cartes), 999px (boutons).
- **Ombres :** quasi inexistantes ; la profondeur vient du contraste de surfaces.
- **Bordures :** fines (1px), faible opacité.
- **Imagerie :** rendus 3D photoréalistes, éclairage doux, palette beige/bois, sujet centré chevauchant le titre (effet de profondeur).
- **Effet signature :** le canapé **chevauche** visuellement le grand titre, créant des plans superposés.

## 6. Tokens CSS

```css
:root {
  /* Colors */
  --bg: #0F1112;
  --surface: #1A1C1D;
  --surface-2: #242628;
  --text: #E8E0D5;
  --text-muted: #B5ADA3;
  --accent: #A57A4C;
  --border: rgba(232, 224, 213, 0.5);

  /* Typography */
  --font: "Inter", "Helvetica Neue", system-ui, sans-serif;
  --fs-hero: clamp(120px, 18vw, 240px);
  --fs-lg: 28px;
  --fs-md: 18px;

  /* Spacing (8px base) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-8: 64px;

  /* Radius */
  --radius-card: 20px;
  --radius-pill: 999px;
}

.hero-title {
  font-size: var(--fs-hero);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.9;
  color: var(--text);
}

.btn-outline {
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  padding: 14px 28px;
  color: var(--text);
  background: transparent;
}
```

## 7. Principes de design à retenir

1. **Contraste doux** : crème sur noir, pas de blanc pur.
2. **Typographie comme élément visuel** : un seul mot géant domine.
3. **Minimalisme** : peu d'éléments, beaucoup d'espace négatif.
4. **Chaleur** : le bois et le beige adoucissent le fond sombre.
5. **Superposition** : l'image produit interagit avec le texte pour créer de la profondeur.

# DIGIXPERTE — Sources du site web

## Structure du projet

```
digixperte-source/
│
├── index.html              ← ✅ FICHIER PRINCIPAL — site complet, fonctionnel
├── logo.jpg                ← Logo DIGIXPERTE (extrait du fichier source)
│
├── css/
│   └── main.css            ← Tous les styles CSS (global + pages)
│
├── js/
│   └── main.js             ← Navigation SPA, formulaires, lightning bolt, simulateur, FAQ
│
└── pages/                  ← Pages HTML séparées (pour intégration CMS / développement)
    ├── nav.html            ← Barre de navigation + menu mobile
    ├── home.html           ← Page d'accueil complète
    ├── blog.html           ← Liste des articles + 10 articles complets
    ├── services.html       ← 6 pages services (SEO, SEA, Meta, Site, CM, Branding)
    ├── legal.html          ← 3 pages légales (mentions, confidentialité, cookies)
    ├── audit.html          ← Page audit gratuit + formulaire
    ├── ressources.html     ← Ressources (lead magnet, livres blancs, blog, partenaire)
    └── contact.html        ← Page contact + formulaire détaillé
```

---

## Mise en ligne

### Option rapide (hébergement simple)
Déposez uniquement **`index.html`** sur votre hébergeur.
Ce fichier est 100% autonome — pas besoin des autres fichiers.

### Option développeur (intégration CMS / WordPress / etc.)
Les fichiers dans `pages/`, `css/` et `js/` sont les sources organisées.
Intégrez-les dans votre architecture selon vos besoins.

---

## Personnalisations à finaliser

| Élément | Fichier | Action |
|---|---|---|
| **Lien partenaire** | `pages/ressources.html` | Chercher `id="partnerLink"` → remplacer `href="#"` par l'URL réelle |
| **PDF Lead Magnet** | `pages/ressources.html` | Chercher `// TODO` dans `submitLM()` → décommenter avec l'URL du PDF |
| **Téléphone** | Tous les fichiers | Remplacer `+33 6 00 00 00 00` par le vrai numéro |
| **Formulaires** | Back-end à connecter | Brevo, Resend, Mailgun, Netlify Forms, ou PHP |
| **Aperçu audit** | `pages/audit.html` | Chercher `auditPreviewBox` → remplacer le placeholder par l'image |

---

## Back-office admin

Fichier séparé : **`digixperte-admin.html`**
- Login : `admin`
- Mot de passe : `digixperte2025`

⚠️ Changer le mot de passe avant mise en ligne !

---

## Technologies

- HTML5 / CSS3 / JavaScript vanille (aucun framework)
- Google Fonts : Playfair Display + DM Sans
- Lucide Icons (CDN)
- Fonctionne sans Node.js, sans build system, sans dépendances locales

---

## Client

**DIGIXPERTE** (SASU — capital 1 €)
Nathan Bouard — Président
494 Rue Léon Blum, 34000 Montpellier
RCS : 937 482 974 RCS Montpellier
contact@digixperte.fr

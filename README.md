# Mon CV

CV interactif en HTML, CSS et JavaScript pur. Aucune dépendance externe, aucun framework.

## Structure du projet

```
├── Mon-CV.html   Page principale
├── style.css                  Styles et animations CSS
├── animations.js              Scripts d'animation JavaScript
└── avatar.jpg                 Photo de profil
```

## Animations

- Confettis roses au chargement de la page
- Curseur personnalisé avec anneau suiveur
- Effet machine à écrire sur le titre du poste
- Rebond des tags au survol

## Utilisation

Ouvrir `index.html` dans un navigateur. Les trois fichiers et `avatar.jpg` doivent être dans le même dossier.

Pour tester en local avec Formspree ou tout service externe, lancer un serveur local :
dans TERMNAL
```bash
python3 -m http.server 8080
```

Puis ouvrir : `http://localhost:8080/index.html`

## Impression et export PDF

Le fichier inclut une règle `@media print` qui supprime les animations, le curseur et les ombres. Pour exporter en PDF, ouvrir dans Chrome ou Firefox, Ctrl + P, choisir "Enregistrer en PDF", format A4, marges à zéro.

## Compatibilité ATS

Ce CV HTML est conçu pour un partage en ligne via lien ou QR code. Il n'est pas adapté à une soumission directe sur un portail RH utilisant un ATS. Prévoir une version Word ou PDF texte pour ces cas.

## Hébergement recommandé

GitHub Pages (dépôt public) ou Netlify (dépôt privé accepté, plan gratuit).

# Mon CV

CV interactif développé en HTML, CSS et JavaScript natif.  
Aucun framework. Aucune dépendance côté build.

## 🌐 Version en ligne

Consulter le CV :  
https://aliaskey.github.io/Mon-CV/

Un QR code est intégré dans le CV pour un accès mobile rapide.


## 📁 Structure du projet

```
├── index.html Page principale
├── style.css Styles et animations CSS
├── animations.js Scripts d’animation JavaScript
└── avatar.jpg Photo de profil
```


---

## ✨ Animations et interactions

- Confettis au chargement de la page
- Curseur personnalisé avec anneau suiveur
- Effet machine à écrire sur l’intitulé de poste
- Animation de rebond des tags au survol
- QR code dynamique vers la version en ligne

---

## ▶️ Utilisation locale

Ouvrir simplement `index.html` dans un navigateur.  
Les fichiers doivent rester dans le même dossier.

---

## 🧪 Lancer un serveur local

Utile pour certains navigateurs et services externes.

Dans le terminal :

```bash
python3 -m http.server 8080

Puis ouvrir : `http://localhost:8080/index.html`
---
##  🖨️ Impression et export PDF

Une règle @media print :
supprime les animations
masque le curseur personnalisé
retire les ombres
Export PDF :
Ouvrir le CV dans Chrome ou Firefox
Ctrl + P
Destination : « Enregistrer en PDF »
Format : A4
Marges : Aucune

## Compatibilité ATS

Ce CV HTML est conçu pour un partage en ligne via lien ou QR code. Il n'est pas adapté à une soumission directe sur un portail RH utilisant un ATS. Prévoir une version Word ou PDF texte pour ces cas.

## Hébergement recommandé

GitHub Pages (dépôt public) ou Netlify (dépôt privé accepté, plan gratuit).

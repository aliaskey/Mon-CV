
Pense-bête des commandes Git (terminal)

Vérifier l’état du dépôt :
git status

Ajouter tous les fichiers modifiés :
git add .

Ajouter un seul fichier :
git add nom-du-fichier

Créer un commit :
git commit -m "Message du commit"

Récupérer les mises à jour du dépôt distant :
git pull --rebase

Envoyer les commits vers GitHub :
git push

Séquence standard complète :
git status
git add .
git commit -m "Mise à jour"
git pull --rebase
git push

Voir l’historique des commits :
git log --oneline

Annuler les modifications d’un fichier non commité :
git restore nom-du-fichier

Modifier le message du dernier commit :
git commit --amend -m "Nouveau message"

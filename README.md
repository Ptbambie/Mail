# Exemple d'utilisation de Dotenv et Mailjet pour l'envoi d'e-mails
Ce projet est un exemple simple qui montre comment utiliser Dotenv et Mailjet pour envoyer des e-mails à l'aide de Node.js.

# Installation

1 Clonez ce dépôt de code sur votre machine locale.
2 Assurez-vous d'avoir Node.js installé sur votre machine.
3 Exécutez la commande npm install pour installer les dépendances.

# Configuration

1 Créez un compte sur Mailjet si vous n'en avez pas déjà un.
2 Créez un fichier .env à la racine du projet.
3 Dans le fichier .env, ajoutez les informations d'authentification SMTP de Mailjet. Voici un exemple :

Copy code
```
SMTP_HOST=in-v3.mailjet.com
SMTP_PORT=465
SMTP_USER=YOUR_MAILJET_API_KEY
SMTP_PASSWORD=YOUR_MAILJET_API_SECRET
```

Modifiez le code de l'exemple **mailer.js** pour configurer le transporteur SMTP avec les valeurs du fichier .env.

# Utilisation
Dans le fichier **sendEmail.js**, personnalisez les détails de l'e-mail que vous souhaitez envoyer, tels que l'adresse e-mail de l'expéditeur, l'adresse e-mail du destinataire, le sujet et le contenu.
Exécutez la commande node sendEmail.js pour envoyer l'e-mail.

# Notes supplémentaires
Assurez-vous d'avoir une connexion Internet active lors de l'exécution de l'exemple.
Si vous rencontrez des problèmes lors de l'envoi de l'e-mail, assurez-vous de vérifier les paramètres d'authentification SMTP dans le fichier .env.
N'hésitez pas à consulter la documentation de Mailjet pour plus d'informations sur l'utilisation de leur service SMTP.
Ceci est juste un exemple simple pour vous aider à démarrer. Vous pouvez ajouter plus de fonctionnalités et personnaliser le code selon vos besoins.

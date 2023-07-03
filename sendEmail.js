const mailer = require('./mailer');

mailer.sendMail({
    from: 'audreyalaime3@gmail.com',
    to: 'graphique.diffusion.alaime@gmail.com',
    subject: 'Test',
    text: 'Hello World!',
    html: '<b>Hello World!</b>',
}, 
(err, info) => {
    if (err)  console.error('Erreur lors de l\'envoi du mail', err);
   else console.log('Email envoyé', info);
}
);
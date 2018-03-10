const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const SENDGRID_API_KEY = functions.config().sendgrid.key
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);
exports.firestoreEmail = functions.firestore
    .document('/users/{uid}/employees/{eid}')
    .onCreate(event => {
        const uid = event.params.uid;
        const db = admin.firestore()
        return db.collection('users').doc(uid)
                 .get()
                 .then(doc => {
                    const user = doc.data()
                    const msg = {
                        to: user.email,
                        from: 'lalwani52@gmail.com',
                        subject:  'Booked',
                        // text: `Hey ${toName}. You have a new follower!!! `,
                        // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

                        // custom templates
                        templateId: '69ba939c-ce48-49cc-b927-5977dc24787d',
                        substitutionWrappers: ['{{', '}}'],
                        substitutions: {
                          name: user.displayName
                          // and other custom properties here
                        }
                    };
                    return sgMail.send(msg)
                })
                .then(() => console.log('email sent!') )
                .catch(err => console.log(err) )

});

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();


// Your company name to include in the emails
const APP_NAME = 'Sakinah';


var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_EMAIL_PASSWORD
    },
});

// Email content

exports.sendEmailX = functions.firestore
    .document('users/{id}')
    .onCreate(async (snap, context) => {
        const user = snap.data()
        await db.collection('loggin').add({
            email: user.email
        })
        await db.collection('loggin').add({
            user: user
        })

        const mailOptions = {
            from: `nekruz.avgani@outlook.com`,
            to: `${user.email}`,
            subject: `Welcome to ${APP_NAME}!`,
            html: `<div style="color: black; fontFamily: Arial, sans-serif; background: rgba(95, 106, 196, 0.05); padding: 15px; width: 90%; border-radius: 10px">
                        <h1>As-salamu alaykum, ${user.name}! 🙂</h1>
                        <p>We are glad that you have taken the step to seek support and guidance for your mental health and well-being. We are here to provide a safe and confidential space for you to share your thoughts, feelings, and experiences.</p>
                        <p>May Allah bless and guide you on your journey towards healing and growth.</p>
                        <p>Thanks for signing up!</p>
                        <p>Jazak Allah Khair,</p>
                        <p>Sakinah Team</p>
                    </div>`
        };

        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });

// await db.collection('loggin').add({ therapy: user.name })


exports.sendEmailRegister = functions.firestore
    .document('therapy-session/{id}')
    .onCreate(async (snap, context) => {
        const user = snap.data()

        await db.collection('loggin').add({
            therapy: user.user_email
        })
        const mailOptionsRegister = {
            from: `nekruz.avgani@outlook.com`,
            to: `${user.user_email}`,
            subject: `Confirmation of Online Therapy Session Booking`,
            html: `<div style="color: black; fontFamily: Arial, sans-serif; background: rgba(95, 106, 196, 0.05); padding: 15px; width: 90%; border-radius: 10px">
                        <h1>As-salamu alaykum, ${user.user_name}! 🙂</h1>
                        <p>We are writing to confirm your Islamic online therapy session booking on <strong>${user.date}</strong> at <strong>${user.time}</strong>. You can call your therapy via our platform within 10 min of the start of the session. Please make sure to have a stable internet connection and all the necessary equipment ready at the time of the session.</p>
                        <p>Kindly let us know 24 hours in advance if you need to reschedule or cancel the session.</p>
                        <p>We are looking forward to working with you, and if you have any questions or concerns, please do not hesitate to contact us.</p>
                        <p>Jazak Allah Khair,</p>
                        <p>Sakinah Team</p>
                    </div>`
        };


        return transporter.sendMail(mailOptionsRegister, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });
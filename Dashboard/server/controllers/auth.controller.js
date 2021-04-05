const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.MAIL_KEY);



exports.registerController = (req, res) => {
    const { name, email, password } = req.body;
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //     const firstError = errors.array().map(error => error.msg)[0];
    //     return res.status(422).json({
    //         errors: firstError
    //     });
    // } else {
        User.findOne({
            email
        }).exec((err, user) => {
            if (user || err) {
                return res.status(400).json({
                    errors: 'Email is taken'
                });
            } else {
                const token = jwt.sign(
                    {
                        name,
                        email,
                        password
                    },
                    process.env.JWT_ACCOUNT_ACTIVATION,
                    {
                        expiresIn: '5d'
                    }
                );
        
                const emailData = {
                    from: process.env.EMAIL_FROM,
                    to: email,
                    subject: 'Account activation link',
                    html: `
                        <h1>Please use the following to activate your account</h1>
                        <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                        <hr />
                        <p>This email may contain sensetive information</p>
                        <p>${process.env.CLIENT_URL}</p>
                    `
                };
                sgMail
                    .send(emailData)
                    .then(sent => {
                        return res.status(200).json({
                            message: `Email has been sent to ${email}`
                        });
                    })
                    .catch(err => {
                        return res.status(400).json({
                            message: 'Merde',
                            errors: errorHandler(err)
                        });
                    });
            }
        });

        
    // }
};

//Register For backend 

exports.activationController = (req, res) => {
    const{token} = req.body
    if (token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    error: 'Session expirée, reconnectez vous'
                })
            }else {
                const {name, email, password} = jwt.decode(token)
        
                const user = new User({
                    name,
                    email,
                    password
                })
                user.save((err, user) => {
                    if (err) {
                        return res.status(401).json({
                            error: errorHandler(err)
                        })
                    } else {
                        return res.json({
                            success: true,
                            message: 'Inscription réussie'
                        })
                    }
                })
            }
        })
    } else {
        return res.json({
            message: 'error happening  please try again'
        })
    }
}

exports.loginController = (req, res) => {
    const {email, password} = req.body
    //pas de gest err
    console.log(email)
    User.findOne({
        email
    }).exec((err, user) => {
        console.log(user)
        if (err || !user) {
            return res.status(400).json({
                error: 'Cet email n est attribué à aucun user'
            })
        }
        if (user.authenticate(password)){
            return res.status(400).json({
                error: 'Le mail et le mdp ne correspondent pas'
            })
        }
        const token = jwt.sign (
            {
                _id: user._id
            }, process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        )
        const {
            _id,
            name,
            email2,
            role
        } = user

        return res.json({
            token,
            user: {
                _id,
                name,
                email2,
                role
            }
        })
    })
    




}
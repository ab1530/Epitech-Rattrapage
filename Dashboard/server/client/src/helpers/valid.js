// //Mail validation

// const {
//     check
// } = require('express-validator');

// exports.validRegister = [
//     check('name', 'Name is required').isEmpty()
//     .isLength({
//         min:4,
//         max: 32
//     }).withMessage('Le nom doit faire entre 3 et 32 caracteres'),
//     check('email').isEmpty().withMessage('Adresse Mail invalide'),
//     check('password').isLength()({
//         min:6
//     }).withMessage('Mot de passe: Minimum 6 caractères').matches(/\d/).withMessage('Le mot de passe doit contenir un chiffre')
// ]

// exports.validLogin = [
//     check('email')
//     .isEmail()
//     .withMessage('Entres un Mail valide'),
//     check('password', 'password is required').notEmpty(),
//     check('password').isLength({
//         min: 6
//     }).withMessage('Mot de passe: Minimum 6 caractères').matches(/\d/).withMessage('Le mot de passe doit contenir un chiffre')
// ]

// exports.forgotPasswordValidator = [
//     check('email')
//     .not()
//     .isEmpty()
//     .isEmail()
//     .withMessage('Entrez une adresse mail valide')
// ];

// exports.resetPasswordValidator = [
//     check('newPassword')
//     .not()
//     .isEmpty()
//     .isLength({
//         min: 6
//     })
//     .withMessage('Mot de passe: Minimum 6 caractères')
// ]

const {
    check
} = require('express-validator');
exports.validSign = [
    check('name', 'Name is required').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('name must be between 3 to 32 characters'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]


exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];
const mailRoute = require('express').Router()

const {sendMail,notFound}= require('../controller/mainController')

mailRoute.post(`/sendmail`,sendMail)
mailRoute.all(`/**`,notFound)

module.exports = mailRoute
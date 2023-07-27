const nodemailer=require('nodemailer');
const {Email_id,Email_password}=require('./serverconfig');
const { emit } = require('nodemon');
const sender=nodemailer.createTransport({

    service:'Gmail',
    auth:{
        user:Email_id,
        pass:Email_password

    }
});

module.exports=sender;
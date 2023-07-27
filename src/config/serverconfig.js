const dotenv=require('dotenv');
dotenv.config();

module.exports={
    PORT:process.env.PORT,
    Email_id:process.env.EMAIL_ID,
    Email_password:process.env.EMAIL_PASS,
}
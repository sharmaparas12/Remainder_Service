const cron=require('node-cron');
const email_service=require('../service/email_service');
const sender=require('../config/email_config');
const { response } = require('express');



const setupjobs= ()  => {
    cron.schedule('*/2 * * * *', async() => {
        const pendingemails=await email_service.fetchpendingemails();
        pendingemails.forEach((email) => {

            sender.sendMail({to:email.recipentEmail,subject:email.subject,text:email.content},async (err,data) =>{
                    if(err){
                        console.log("error while sending email");
                    }
                    else{
                        console.log("went into update function")
                        await email_service.update_Ticket(email.id,{status:"SUCESS"});
                    }
            });



 
            
            
        });

    });
}

module.exports=setupjobs ;

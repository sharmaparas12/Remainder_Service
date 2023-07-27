const sender=require('../config/email_config');
const Ticketrepository=require('../repository/ticket_repository');

const repo=new Ticketrepository();
const sendemail=async (mailfrom,mailto,mailsubject,mailbody) => {
    try {

        sender.sendMail({
            from:mailfrom,
            to:mailto,
            subject:mailsubject,
            text:mailbody
    
        });
        
    } catch (error) {

        console.log('error in service layer');
        throw {error};
        
    }
    
}

const fetchpendingemails= async (timestamp) => {
    try {
      
        const response=await repo.get({status:"PENDING"});
        return response;
        
    } catch (error) {
        console.log("error in service layer");
        throw {error};
        
    }
}
const createnotification=async (data) => {
    try {

        const response=await repo.create(data);
        return response;
        
    } catch (error) {
        console.log("error in repository layer");
        throw {error};
        
    }

}
const update_Ticket=async (email_id,data) => {
    try {
        
        const ticket=await repo.update_tic(email_id,data);
       
        return ticket;
        
        
        
    } catch (error) {
        console.log("error in service layer");
        throw {error};

        
    }
}
module.exports={
    sendemail,
    fetchpendingemails,
    createnotification,
    update_Ticket,
}
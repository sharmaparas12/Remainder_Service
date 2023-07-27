const {NotificationTicket}=require('../models/index');
const {Op}=require("sequelize");


class Ticketrepository {
    async getall(){
        try {
            const tickets=await NotificationTicket.findAll();
            return tickets;
            
        } catch (error) {
            console.log("error in repository layer");
            throw {error};
            
        }
    }

    async create(data){
        try {
            
            const ticket=await NotificationTicket.create(data);
            return ticket;
            
        } catch (error) {
            console.log("error in repository layer");
            throw {error};
            
        }
    }

    async get(filter){
        try {
            const response=await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            });
            return response;
        } catch (error) {
            console.log("error in repository layer");
            throw {error};
            
        }
    }
    async update_tic(email_id,data){
        try {
            console.log(email_id);
            const response=await NotificationTicket.findByPk(email_id);
            if(data.status){
                response.status=data.status;
            }
            response.status=data.status;
            await response.save();
            return response;
          
            
        } catch (error) {
            console.log("error in repository layer");
            throw {error};
            
        }
    }

    
}

module.exports=Ticketrepository;
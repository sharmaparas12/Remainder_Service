const { response } = require('express');
const ticketservice=require('../service/email_service');


const create=async (req,res) =>{
    try {
        const data= await ticketservice.createnotification(req.body);
        return res.status(300).json({
            data:data,
            message:'created succesfully',
            err:{},
            sucess:true
        })
        
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            data:response,
            err:error,
            message:'error in creating ticket'
        })
        
    }
}

module.exports={
    create,
}
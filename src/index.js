const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverconfig');
const {sendemail}=require('./service/email_service');
const setupjobs=require('./utils/job');
const ticketcontroller=require('./controllers/ticket_controllers');

const setupAndstartserver= async () => {
    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.post('/api/v1/tickets',ticketcontroller.create);

    app.listen(3004,() => {

        console.log("server started at"+PORT);
        setupjobs();
        
    });
}


setupAndstartserver();
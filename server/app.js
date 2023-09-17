const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes=require("./routes/AuthRoutes");
const app=express();
const cookieParser=require("cookie-parser");
 
app.use(cors(
    {
        origin:["http://localhost:5173"],
        method:["GET","POST"],
        credentials:true,
    }
));
app.use(express.json());
app.use(bodyParser.json());
dotenv.config({path:'./config.env'});

const customerRoutes = require('./routes/customerRoutes');
const vendorRoutes = require('./routes/vendorRoutes'); 
const itemRoutes = require('./routes/itemRoutes'); 
const categoryRoutes = require('./routes/categoryRoutes'); 
const purchasebillRoutes = require('./routes/purchasebillRoutes'); 
const invoiceRoutes = require('./routes/invoiceRoutes'); 
const { default: mongoose } = require('mongoose');

require('./DB/conn'); 
require('./DB/conn'); 
const PORT=process.env.PORT;
 
app.use('/customer', customerRoutes);  
app.use('/vendor', vendorRoutes);
app.use('/item', itemRoutes);
app.use('/category', categoryRoutes);
app.use('/purchasebill', purchasebillRoutes);
app.use('/invoice', invoiceRoutes);

app.use(cookieParser());
app.use("/",authRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT);
});




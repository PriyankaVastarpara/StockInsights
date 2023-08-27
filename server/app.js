const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();
 
app.use(cors());
app.use(bodyParser.json());
dotenv.config({path:'./config.env'});

const customerRoutes = require('./routes/customerRoutes');
const vendorRoutes = require('./routes/vendorRoutes'); 
const itemRoutes = require('./routes/itemRoutes'); 
const categoryRoutes = require('./routes/categoryRoutes'); 
const purchasebillRoutes = require('./routes/purchasebillRoutes'); 
const invoiceRoutes = require('./routes/invoiceRoutes'); 

require('./DB/conn'); 
require('./DB/conn'); 
const PORT=process.env.PORT;
 
app.use('/customer', customerRoutes);  
app.use('/vendor', vendorRoutes);
app.use('/item', itemRoutes);
app.use('/category', categoryRoutes);
app.use('/purchasebill', purchasebillRoutes);
app.use('/invoice', invoiceRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT);
});


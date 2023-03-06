const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./utils/database');

const cors = require('cors');

const app = express();

app.use(cors());

const expenseRoutes = require('./routes/expenseroute');





app.use(bodyParser.json({ extended: false }));

app.use('/user',expenseRoutes);





db.sync()
    .then(result => {
        //console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })


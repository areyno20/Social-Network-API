const express = require('express');
const db = require('./config/connection.js');
const routes = require('./routes');


const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(port, () => console.log(`Now listening on port ${port}`));
    }
);

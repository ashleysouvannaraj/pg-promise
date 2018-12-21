const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let promise = require('bluebird');

const initOptions = {
    promiseLib: promise,
};

const pgp = require('pg-promise')(initOptions);

// database connection parameters
const config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurant',
    user: 'postgres'
};

// call config file
const database = pgp(config);

// database.query('SELECT * FROM restaurant')
//     .then(function (results) {
//         results.forEach(function (column) {
//             console.log(column.name, column.category, column.favoritedish, column.star);
//         });
//     });

// database.one("SELECT * FROM restaurant WHERE name= 'Ecco'")
//     .then(function(column) {
//         console.log(column.name, column.category);
//     });


// Insert a new value to table
const name = 'Eight Sushi';
const distance = 5;
const query = `INSERT INTO restaurant("name", "distance") \ VALUES('${name}', '${distance}')`;

database.result(query).then(function(result) {
    console.log(result);
});

pgp.end();
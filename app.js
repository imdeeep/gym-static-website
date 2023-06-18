const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const port = 80;


// Express related stuff:
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Pug related stuff:
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Endpoints:
app.get('/', (req, res) => {
    const params = { 'title': 'Home' };
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res) => {
    const output = req.body;
    const outputToWrite = JSON.stringify(output)+ '\n';;
    fs.appendFileSync('Clients.txt', outputToWrite);
    const params = { message: 'Your form has been submitted successfully' };
    res.status(200).render('index.pug', params);
  });

// Starting the server:
app.listen(port, () => {
    console.log('The application is starting on port ' + port);
});

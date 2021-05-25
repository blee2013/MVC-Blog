<<<<<<< HEAD
require('dotenv').config();
=======
// require('dotenv').config();
>>>>>>> 0b2ec4011c828841262a5faeb441c4fb482c6a69
const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

// const routes = require('./controllers');

const sequelize = require("./config/connection");

const hbs = exphbs.create({});

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

<<<<<<< HEAD
const helpers = require('./utils/helpers');

const hbs = exphbs.create({});



=======
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
>>>>>>> 0b2ec4011c828841262a5faeb441c4fb482c6a69

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.use(require('./controllers/'));


// turn on conneciton to db and server
sequelize.sync({ force: false }).then(() => {
<<<<<<< HEAD
    app.listen(PORT, () => console.log('Now listening'+PORT));
});
=======
    app.listen(PORT, () => console.log('Now listening'));
});




// const helpers = require('./utils/helpers');









// // turn on routes
// app.use(routes);



>>>>>>> 0b2ec4011c828841262a5faeb441c4fb482c6a69

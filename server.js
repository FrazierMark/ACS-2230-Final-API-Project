require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');

const { port } = require("./config");
const PORT = process.env.PORT || port;

// Routes
const AuthorizationRoutes = require('./routes/Auth');
const UserRoutes = require('./routes/User');
const ProductRoutes = require('./routes/Product');

// Sequelize model imports
const UserModel = require('./models/User');
const ProductModel = require('./models/Product');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sequelize connection
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './data/data.db',
});

// Sequelize model initialisation
UserModel.initialise(sequelize);
ProductModel.initialise(sequelize);

// Syncing the models that are defined on sequelize with the tables that alredy exists
// in the database. It creates models as tables that do not exist in the DB.
sequelize
	.sync()
	.then(() => {
		console.log('Sequelize Initialised!!');

		// Attaching the Authentication and User Routes to the app.
		app.use('/', AuthorizationRoutes);
		app.use('/user', UserRoutes);
		app.use('/product', ProductRoutes);

		app.listen(PORT, () => {
			console.log('Server Listening on PORT:', port);
		});
	})
	.catch((err) => {
		console.error('Sequelize Initialisation threw an error:', err);
	});

module.exports = app;

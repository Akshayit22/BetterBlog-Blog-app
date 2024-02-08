const swaggerAutogen = require('swagger-autogen')();

const doc = {
	info:{
		title:'Authentication system with MERN stack',
		description:'Authentication system with MERN stack with react-redux, mail, cloudinary, jwt, login, signup,resetpassword'
	},
	host:'localhost:3000/api/v1/'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/User.js'];

swaggerAutogen(outputFile ,routes, doc);

/* PUT IN server.js

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

*/
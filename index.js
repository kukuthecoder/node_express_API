import express from 'express';
import bodyParser from 'body-parser';


import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//since all routes are starting with users
app.use('/users' , usersRoutes);

app.get( '/' , (req , res) => {
	console.log('running');
	
	res.send('Hello');
});

app.get('/kudzie', (req , res) => {
	console.log('Kudzie');
	
	res.send('Hello Kudzie');
});

app.listen(PORT , () => console.log('server running'));
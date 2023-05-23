import express from 'express';
import { v4 as uuidv4 } from 'uuid';

//create an empty users array
const users = [
     
]

//create functions to handle action on users

//get all users
export const getUsers = (req , res) => {
	console.log(users);
	res.send(users);
}
//add a user
export const addUser = (req , res) => {
	const user = req.body;
	const userId = uuidv4(); //'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
	const userWithId = {  ...user, userid : userId }
	users.push(userWithId);
	

	res.send(`successfully added ${userWithId.name} to the Database`);
}
//get a user by id function
export const getUserById =( req , res) => {
	const { id } = req.params;
	const foundUser = users.find((user) => user.id == id );
	res.send(foundUser);
}
//update a user 
export const updateUser = (req , res) => {
	const { id } = req.params;
	const { name , actualName , displayName , userid } = req.body;
	const user = users.find((user) => user.id == id );
	
	if (name){
		user.name = name;
	}
	if (actualName){
		user.actualName = actualName;
	}
	if (displayName){
		user.displayName = displayName;
	}
	if (userid){
		user.userid = userid;
	}
	
	res.send(`user with id ${id} has been updated`);
}
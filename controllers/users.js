import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

let users = [];

export const createUser = (req,res)=>{
    const newUser = req.body;

    const userId = uuidv4();  // unique id
    const userWithId = {...newUser, userId};

    users.push(userWithId);

    res.send(`user with first name ${userWithId.firstName} added to database`);
};  

export const getUsers = (req,res) => {
    res.send(users);
};

export const findUser = (req,res)=>{
    const { id } = req.params;
    console.log(id);

    const readUser = users.find((user) => {
        return (user.userId === id)
    });
    console.log(readUser);
    res.send(readUser);
};

export const deleteUser = (req,res)=>{
    const { id } = req.params;

    users = users.filter((user) => user.userId !== id);

    res.send(`User with id ${id} is deleted from database`);
};

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user)=> {
        return user.userId === id;
    });

    if(firstName){
        console.log(firstName);
        userToBeUpdated.firstName = firstName;
    } 
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;

    res.send(`user with id ${id} updated`);

};
import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const addUser = (req, res) => {
  let user = req.body;
  user = { ...user, id: uuidv4() };
  users.push(user);
  res.send(`User with name ${req.body.firstName} added to database`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with ${id} deleted`);
};

export const updateUser = (req, res) => {
  const { firstName, lastName, age } = req.body;
  const { id } = req.params;
  let user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with id ${id} has been updated`);
};

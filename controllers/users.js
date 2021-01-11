const users = [
  {
    firstName: "Prathamesh",
    lastName: "Davande",
    age: "22",
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

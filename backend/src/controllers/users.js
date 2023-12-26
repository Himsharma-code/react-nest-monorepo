import Users from "../models/users.js";

export const createUser = (req, res) => {
  if (
    !req.body.email ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.phoneNumber
  ) {
    res.status(400).send({ message: "All fields are required!" });
    return;
  }

  Users.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        throw new Error("User already exists!");
      } else {
        const newUser = new Users({
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          // ...other properties
        });

        return newUser.save();
      }
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

export const getAllUsers = (req, res) => {
  Users.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving users.",
      });
    });
};

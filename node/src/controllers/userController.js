const User = require('../models/User');


module.exports = {

  list: async (req, res) => {
    const users = await User.find();
    res.send(users);
  },

  create: async (req, res) => {
    const { name, email, password} = req.body;

    const newUser = await User.create({
      name,
      email,
      password
    });

    res.send(newUser);
  }

};

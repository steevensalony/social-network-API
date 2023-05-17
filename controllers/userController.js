const { Thought, User } = require('../models');

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .select('-__v')
      .then((user) => 
        !user
          ? res.status(404).json({ message: 'No users found with this ID.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
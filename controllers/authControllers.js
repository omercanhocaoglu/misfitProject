const User = require('../models/User');

// generate a account
exports.createUser = async ( req, res ) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({
        status: 'success',
        user,
      })
    } catch (error) {
      res.status(400).json({
        status: "failed",
        error,
      });
    }
  };
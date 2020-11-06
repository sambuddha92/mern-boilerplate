const {
  models: { User },
} = require("../../db");

module.exports = async (login_id, hashed_password, first_name, last_name) => {
  try {
    const newUser = new User({
      login_id,
      hashed_password,
      first_name,
      last_name,
    });

    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

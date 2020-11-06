const {
  models: { User },
} = require("../../db");

module.exports = async (login_id) => {
  try {
    
    let user = await User.findOne({login_id});

    return user ? user : null;
  } catch (error) {
    throw error;
  }
};

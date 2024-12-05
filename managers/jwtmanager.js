const jsonWebtoken = require('jsonwebtoken')

const jwtmanager = (user) => {
    const accesstoken = jsonWebtoken.sign({
        _id:user._id,
        name:user.name,
    },process.env.JWT_SALT)
    return accesstoken;
};

module.exports = jwtmanager;
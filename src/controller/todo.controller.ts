
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAync');

const add = catchAsync(async (req, res) => {
    // const user = await userService.createUser(req.body);
    // const tokens = await tokenService.generateAuthTokens(user);
    res.status(httpStatus.CREATED).send({add:'todo' });
});
const rateLimit = require('express-rate-limit');
const config = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
    windowMS: requests.rateLimit.window,
    max: requests.rateLimit.max,    
});

const slower = slowDown({
    windowMS: requests.slowDown.window,
    delayMS: requests.slowDown.delayMS,

});

module.exports = [
    slower,
    limiter,
];
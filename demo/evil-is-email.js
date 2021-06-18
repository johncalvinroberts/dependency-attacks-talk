const fs = require("fs/promises");

module.exports = async (email) => {
  // can write to file system, or send somewhere else
  await fs.writeFile("./emails", email);
  return true;
};

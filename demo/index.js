const prompts = require("prompts");
const greeting = require("./greeting");
// now we can intercept all emails passed to other dependency

(async () => {
  await prompts([
    {
      type: "text",
      name: "Name",
      message: "Your Name",
    },
    {
      type: (prev) => {
        greeting(prev);
        return "text";
      },
      name: "Email",
      message: "Please enter your email",
      validate: (value) => require("is-email")(value),
    },
  ]);
})();

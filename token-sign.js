const jwt = require("jsonwebtoken");
const fs = require("fs");

const SECRET = fs.readFileSync("private.key");
const user = {
  sub: 1, // the identifier of this token
  email: "11dereksamuel@gmail.com",
  password: "sadasdas45454asdPASSWORD" // no guardar en el payload el password o info sensible
};
console.log(jwt.sign(user, SECRET));

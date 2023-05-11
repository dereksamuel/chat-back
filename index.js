require("dotenv").config();
const express = require("express");
const routerApi = require("./router");

const app = express();
const PORT = process.env.PORT || 3000;

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

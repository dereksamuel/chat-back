require("dotenv").config();
const express = require("express");
const routerApi = require("./router");
const { errorHandler, logErrors, boomErrorHandler } = require("./middlewares/error.handler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

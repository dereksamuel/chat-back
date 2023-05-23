require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routerApi = require("./router");
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require("./middlewares/error.handler");

const app = express();
const PORT = process.env.PORT || 3000;
const whiteList = ["http://localhost:8080"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("[error]: Not allowed by CORS"));
    }
  }
};

app.get("/", (req, res) => res.redirect("/api/v1/users"));

app.use(express.json());
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

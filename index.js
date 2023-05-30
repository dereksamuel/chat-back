require("dotenv").config();
const express = require("express");
// const http = require("http");
const cors = require("cors");

const routerApi = require("./router");
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require("./middlewares/error.handler");
// const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 3000;
const whiteList = ["http://localhost:8080", "http://localhost:8000"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("[error]: Not allowed by CORS"));
    }
  }
};

require("./utils/auth");

app.get("/", (req, res) => res.redirect("/api/v1/users"));

app.use(express.json());
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });
//FIXME: To do socket connection: https://www.youtube.com/watch?v=nAQEvcehyqo&ab_channel=Fazt

app.listen(PORT);
console.log(`Server listening on http://localhost:${PORT}`, process.env.NODE_ENV);

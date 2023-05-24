const jwt = require("jsonwebtoken");
const fs = require("fs");

const SECRET = fs.readFileSync("private.key");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiMTFkZXJla3NhbXVlbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNhZGFzZGFzNDU0NTRhc2RQQVNTV09SRCIsImlhdCI6MTY4NDk1Mjg2Nn0.GrbnQxm8LlJ-DGzCQK14DwxafQLOQiSsUcqtGDk6aWo";
console.log(jwt.verify(token, SECRET));

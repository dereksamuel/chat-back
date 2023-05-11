const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    derek: "Hello World!",
  });
});

app.get("/users", (req, res) => {
  res.json([
    {
      id: "asd4x89xf-sad45s4da6",
      name: "Derek",
      email: "11dereksamuel@gmail.com",
      phone: "3154494547",
      password: "1234",
      bio: "I am a full stack developer",
    },
    {
      id: "asd4x89xf-saad45s4da6",
      name: "Samuel",
      email: "11dereksamuel@gmail.com",
      phone: "3354454547",
      password: "123456",
      bio: "I am a frontend developer",
    },
  ]);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;

  res.json({
    id: userId,
    name: "Derek",
    email: "11dereksamuel@gmail.com",
    phone: "3154494547",
    password: "1234",
    bio: "I am a full stack developer",
  });
});

app.get("/messages", (req, res) => {
  res.json([
    {
      id: "asd4x89xf-sad45s4da6",
      content: "Hello World!",
      channels_users_id: "asd4x89xf-sad45s4da6",
    },
    {
      id: "asd4x89xf-sad45s4da6",
      content: "Hello World!",
      channels_users_id: "asd4x89xf-sad45s4da6",
    },
  ]);
});

app.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;

  res.json({
    id: messageId,
    name: "Hello World!",
    channels_users_id: "asd4x89xf-sad45s4da6",
  });
});

app.get("/channels", (req, res) => {
  res.json([
    {
      id: "asd4x89xf-sad45s4da6",
      name: "Platzi",
      description: "Desc and bio",
    },
  ]);
});

app.get("/channels/:channelId", (req, res) => {
  const { channelId } = req.params;

  res.json({
    id: channelId,
    name: "Platzi",
    description: "Desc and bio",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

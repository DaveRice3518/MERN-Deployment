const express = require("express");
  app = express(),
  cors = require('cors'),
  port = 8000,
  server = app.listen(port,() => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({"extended":true}));

app.get("/api", (req, res) => {
  res.json({ message: "Pet Shelter server is responding?" });
});

require("./server/config/database.config");
require("./server/routes/pet.routes")(app);
const express = require("express");
const app = express();
var path = require("path");
const port = 3000;

app.use(
  "/lib",
  express.static(path.join(__dirname + "/../client/lib"))
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/public/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

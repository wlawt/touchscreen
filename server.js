const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server
if (process.env.NODE_ENV === "production") {
  // static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server config
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

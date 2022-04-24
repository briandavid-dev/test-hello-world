const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

process.env.PORT  = 8001

app.use(cors());
app.use(express.json({ limit: "50mb" }));




app.get("/services-test", (req, res) => {
  
        res.json({ codigo: "1", message: "it´s ok" });
  });

app.listen(process.env.PORT, () => {
  console.log("Server is started in PORT " + process.env.PORT);
});

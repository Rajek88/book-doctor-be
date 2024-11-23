const express = require("express");
const appointmentRoutes = require("./routes/appointmentRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/appointments", appointmentRoutes);
app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Yes! I am online",
  });
});

module.exports = app;

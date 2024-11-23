const express = require("express");
const appointmentRoutes = require("./routes/appointmentRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/appointments", appointmentRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

module.exports = app;

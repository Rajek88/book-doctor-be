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

const PORT = 3000;
app.listen(PORT, async () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

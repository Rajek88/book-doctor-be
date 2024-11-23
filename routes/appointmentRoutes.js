const express = require("express");
const {
  bookAppointment,
  getAppointmentByEmail,
  getAppointmentsByDoctor,
  cancelAppointment,
  modifyAppointment,
} = require("../controllers/appointmentController");

const router = express.Router();

router.post("/", bookAppointment);
router.get("/:email", getAppointmentByEmail);
router.get("/doctor/:doctorName", getAppointmentsByDoctor);
router.delete("/", cancelAppointment);
router.put("/", modifyAppointment);

module.exports = router;

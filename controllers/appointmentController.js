// as using database was not asked in the assignment, hence using the array
// and I am also attempting to host it on vercel
const appointments = [];
const doctors = ["Dr. Smith", "Dr. Jones", "Dr. Taylor"];

// to book appointment
exports.bookAppointment = (req, res) => {
  const { firstName, lastName, email, timeSlot, doctorName } = req.body;

  if (!firstName || !lastName || !email || !timeSlot || !doctorName) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!doctors.includes(doctorName)) {
    return res.status(400).json({ error: "Invalid doctor name." });
  }

  const conflict = appointments.some(
    (appointment) =>
      appointment.timeSlot === timeSlot && appointment.doctorName === doctorName
  );

  if (conflict) {
    return res.status(400).json({ error: "Time slot is already booked." });
  }

  const appointment = { firstName, lastName, email, timeSlot, doctorName };
  appointments.push(appointment);
  return res
    .status(201)
    .json({ message: "Appointment booked successfully!", appointment });
};

// to get booked appointment
exports.getAppointmentByEmail = (req, res) => {
  const { email } = req.params;
  const allAppointments = appointments.filter((appt) => appt.email === email);

  if (!allAppointments?.length) {
    return res
      .status(404)
      .json({ error: "No appointment found for this email." });
  }

  return res.json({ allAppointments });
};

// to get booked appointments of a doctor
exports.getAppointmentsByDoctor = (req, res) => {
  const { doctorName } = req.params;

  if (!doctors.includes(doctorName)) {
    return res.status(400).json({ error: "Invalid doctor name." });
  }

  const doctorAppointments = appointments.filter(
    (appt) => appt.doctorName === doctorName
  );
  return res.json({ allAppointments: doctorAppointments });
};

// cancel a appointment
exports.cancelAppointment = (req, res) => {
  const { email, timeSlot } = req.body;
  const index = appointments.findIndex(
    (appt) => appt.email === email && appt.timeSlot === timeSlot
  );

  if (index === -1) {
    return res.status(404).json({ error: "No matching appointment found." });
  }

  appointments.splice(index, 1);
  return res.json({ message: "Appointment cancelled successfully." });
};

// modify a appointment
exports.modifyAppointment = (req, res) => {
  const { email, originalTimeSlot, newTimeSlot } = req.body;

  const appointment = appointments.find(
    (appt) => appt.email === email && appt.timeSlot === originalTimeSlot
  );

  if (!appointment) {
    return res.status(404).json({ error: "No matching appointment found." });
  }

  const conflict = appointments.some(
    (appt) =>
      appt.timeSlot === newTimeSlot &&
      appt.doctorName === appointment.doctorName
  );

  if (conflict) {
    return res.status(400).json({ error: "New time slot is already booked." });
  }

  appointment.timeSlot = newTimeSlot;
  return res.json({
    message: "Appointment modified successfully.",
    appointment,
  });
};

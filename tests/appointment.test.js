const request = require("supertest");
const app = require("..");

describe("Appointment APIs", () => {
  it("should book an appointment", async () => {
    const res = await request(app).post("/appointments").send({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      timeSlot: "10:00 AM - 11:00 AM",
      doctorName: "Dr. Smith",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.appointment).toHaveProperty("email", "john@example.com");
  });

  it("should fetch an appointment by email", async () => {
    const res = await request(app).get("/appointments/john@example.com");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", "john@example.com");
  });
});

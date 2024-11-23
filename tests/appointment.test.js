const request = require("supertest");
const app = require("../test-index");

let server;
beforeAll(() => {
  server = app.listen(4000);
});

afterAll(() => {
  server.close();
});

// wip --------------------------------------
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
    // validation of the appointment structure
    expect(res.body.allAppointments).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          doctorName: "Dr. Smith",
          email: "john@example.com",
          firstName: "John",
          lastName: "Doe",
          timeSlot: "10:00 AM - 11:00 AM",
        }),
      ])
    );
  });
});

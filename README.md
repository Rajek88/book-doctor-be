# Book Doctor

[Book Doctor](https://rajek88.github.io/book-doctor) is a web application designed to help users book doctor appointments with ease. This user-friendly app simplifies the process of finding and scheduling medical consultations.

## Features

- **Doctor Listings**: Browse available doctors based on specialization and availability.  
- **Appointment Booking**: Schedule appointments quickly and easily.  
- **Responsive Design**: Accessible on desktop, tablet, and mobile devices.  
- **User-Friendly Interface**: Simple navigation for all age groups.

## Demo

Check out the live demo of the application here:  
[Book Doctor Live Demo](https://rajek88.github.io/book-doctor)

## Installation

Follow these steps to run the project locally:


* Clone the repo

```bash
  git clone https://github.com/rajek88/book-doctor.git
```

* Navigate to the project directory:

```bash
  cd book-doctor
```

* Install dependencies npm start

```bash
  npm install
```

* Start the server

```bash
  npm run start
```

* To run the tests on the server and APIs

```bash
  npm run test
```

* Open your browser and go to http://localhost:3000 to view the app.



## Technologies Used

- **Frontend**: HTML, CSS, JavaScript  
- **Framework**: React.js  
- **Styling**: CSS  
- **Backend**: Node.js, Express.js  
- **Database**: Inserver memory 
- **Hosting**: GitHub Pages for frontend  
- **API Hosting**: Vercel

## Demo

Check out the live demo of the application here:  
[Book Doctor Live Demo](https://rajek88.github.io/book-doctor)

## API Routes

Here are the available API routes for the Book Doctor app:

1. **POST `/`**:  
   - **Description**: Book an appointment with a doctor.  
   - **Handler**: `bookAppointment`  
   - **Request Body**: Appointment details (e.g., name, email, doctor, date, etc.)

2. **GET `/:email`**:  
   - **Description**: Get all appointments for a specific user by their email.  
   - **Handler**: `getAppointmentByEmail`  
   - **Request Parameter**: `email` (The user's email)

3. **GET `/doctor/:doctorName`**:  
   - **Description**: Get all appointments for a specific doctor by their name.  
   - **Handler**: `getAppointmentsByDoctor`  
   - **Request Parameter**: `doctorName` (The name of the doctor)

4. **DELETE `/`**:  
   - **Description**: Cancel an existing appointment.  
   - **Handler**: `cancelAppointment`  
   - **Request Body**: Appointment ID to cancel

5. **PUT `/`**:  
   - **Description**: Modify an existing appointment.  
   - **Handler**: `modifyAppointment`  
   - **Request Body**: Appointment details to update (e.g., new date, time, etc.)

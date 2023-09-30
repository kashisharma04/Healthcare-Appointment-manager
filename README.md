# Healthcare-Appointment-manager

Welcome to the Healthcare Appointment System API repository! This project implements API endpoints for managing appointments with doctors who follow a weekly schedule.

## Project Overview
In this system, doctors practice on a weekly schedule with the following constraints:
- They practice at one location.
- They only accept appointments in the evenings.
- Each doctor may consult a maximum number of patients per day.
- Doctors are not available on Sundays.

The API provides the following functionality:

1. **Doctor Listing:** Retrieve a list of all doctors, including their basic information such as name, specialization, and availability.

2. **Doctor Detail Page:** View detailed information about a specific doctor, including their schedule and appointment availability.

3. **Appointment Booking:** Allow patients to book appointments with available doctors within the specified constraints.

## API Endpoints
### 1. Doctor Listing
- **Endpoint:** `/api/doctors`
- **HTTP Method:** GET
- **Description:** Retrieve a list of all doctors.

### 2. Doctor Detail Page
- **Endpoint:** `/api/doctors/:doctorId`
- **HTTP Method:** GET
- **Description:** View detailed information about a specific doctor.

### 3. Appointment Booking
- **Endpoint:** `/api/doctors/:doctorId/book-appointment`
- **HTTP Method:** POST
- **Description:** Book an appointment with a doctor. Ensure that the appointment adheres to the doctor's availability and maximum patient limit.

## Getting Started
To set up and run this project locally, follow these steps:

1. Clone this repository: `git clone https://github.com/kashisharma04/Healthcare-Appointment-manager.git`

2. Install dependencies:`npm install`
3. Start the Node.js server: `node server.js`

## Usage
- Make API requests to the specified endpoints using tools like Postman or cURL.
- Ensure you have a running MongoDB instance and update the connection settings in `index.js`.
- Customize the API logic to meet your specific requirements.

## Contact
If you have any questions or need assistance, feel free to contact us at [kashisharmaujjn@gmail.com].

Thank you for exploring Healthcare project. I hope it empowers you to gain valuable insights from your data!

---

Feel free to customize this README file further to provide additional details about your project, installation instructions, and any other relevant information.
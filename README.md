PromptPay QR Payment Generator

A simple web application for generating PromptPay QR codes by entering a payment amount in Thai Baht (THB).

The application uses a frontend interface to collect the payment amount and a Node.js backend to generate a PromptPay QR code that can be scanned using a supported mobile banking application.

Features

* Generate PromptPay QR codes based on a specified payment amount.
* Validate payment amounts before generating QR codes.
* Display the QR code and total payment amount.
* Download the generated QR code as an image.
* Provide error messages when QR code generation fails.
* Minimal and responsive user interface.

Tech Stack

Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

Backend

* Node.js
* Express.js
* promptpay-qr
* qrcode
* CORS

Project Structure

promptpay-qr-payment/
├── frontend/
│   ├── index.html
│   └── style.css
├── backend/
│   ├── server.js
│   └── package.json
└── README.md

The directory structure above is an example. Adjust the file locations to match your actual project.

Getting Started

1. Prerequisites

Make sure you have installed:

* Node.js
* npm
* A web browser

2. Install Dependencies

Navigate to your backend directory and install the required packages.

npm init -y
npm install express qrcode promptpay-qr cors

3. Configure Your PromptPay Number

Open your backend file and locate:

const mobileNumber = 'YOUR_PROMPTPAY_NUMBER'

Replace YOUR_PROMPTPAY_NUMBER with the PromptPay phone number registered to receive payments.

Keep your actual payment details private when publishing your project.

4. Start the Backend Server

Run the following command in your backend directory:

node server.js

The server will start at:

http://localhost:3000

To check whether the server is running, open the address in your browser. It should return a JSON response.

5. Run the Frontend

Open index.html in your browser or use the Live Server extension in Visual Studio Code.

The frontend sends a POST request to the backend endpoint:

http://localhost:3000/generateQR

Make sure the backend is running before generating a QR code.

API Endpoint

Generate PromptPay QR Code

Endpoint

POST /generateQR

Request Body

{
  "amount": 100
}

Successful Response

{
  "Rescode": 200,
  "resMessage": "QR Code generated successfully",
  "result": "data:image/png;base64,..."
}

The result field contains the generated QR code as a Base64-encoded image data URL.

Error Response

{
  "Rescode": 400,
  "resMessage": "Invalid amount"
}

The API returns an error when the payment amount is invalid or when QR code generation fails.

How to Use

1. Open the application in your browser.
2. Enter the desired payment amount in THB.
3. Click Generate QR Code.
4. Wait for the QR code to appear.
5. Scan the QR code using a supported mobile banking application.
6. Click Download QR Code to save the image.

Payment Amount Validation

The frontend validates the payment amount before sending the request.

* The amount must be greater than zero.
* The maximum amount is 999,999,999.99 THB.
* The amount must contain no more than two decimal places.

The backend also checks that the amount is valid before generating the QR code.

Notes

* The QR code is generated using the PromptPay number configured in the backend.
* The displayed payment amount is the amount entered by the user.
* Generating a QR code does not mean that a payment has been completed.
* This project generates payment QR codes; it does not process or verify transactions.
* The backend currently uses a local development URL. Update the API URL when deploying the application.
* For production use, configure appropriate security measures, input validation, and error handling.

License

This project is intended for learning and development purposes.
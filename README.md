PromptPay QR Payment Generator

A simple web application that allows users to enter a payment amount and generate a PromptPay QR code for convenient payments in Thailand.

Features

* Enter a payment amount in Thai Baht (THB).
* Generate a PromptPay QR code through a backend API.
* Display the QR code and payment amount.
* Download the generated QR code as an image.
* Validate payment amounts before generating a QR code.
* Responsive and minimal user interface.

Tech Stack

Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

Backend

* Node.js
* Express.js
* PromptPay QR generation API or library

Project Structure

project/
├── index.html
├── style.css
└── images/
    └── promptpay.png

The backend is expected to run separately and provide the /generateQR endpoint.

Getting Started

1. Clone the Repository

git clone <repository-url>
cd <project-folder>

2. Start the Backend

Make sure your backend server is configured to generate PromptPay QR codes and runs at:

http://localhost:3000

The frontend sends a POST request to:

POST /generateQR

Example request body:

{
  "amount": 100
}

Expected response format:

{
  "Rescode": 200,
  "result": "data:image/png;base64,..."
}

The result field should contain an image URL or a Base64-encoded image data URL that the browser can display.

3. Run the Frontend

Open index.html in your browser or use a local development server, such as the Live Server extension in Visual Studio Code.

Ensure the backend is running before generating a QR code.

How to Use

1. Open the application in your browser.
2. Enter the payment amount in THB.
3. Click Generate QR Code.
4. Scan the displayed QR code using a supported mobile banking application.
5. Click Download QR Code to save the image.

Validation

The application validates the entered amount before sending the request to the backend.

* The amount must be greater than zero.
* The maximum amount is 999,999,999.99 THB.
* The amount can contain up to two decimal places.

Notes

* The backend must implement the /generateQR endpoint.
* The QR code must contain valid PromptPay payment data to support banking-app scanning.
* Generating a QR code does not confirm that a payment has been completed.
* For production deployment, configure the API endpoint appropriately and implement suitable security measures.

License

This project is intended for educational and development purposes.
const express = require('express')
const app = express()
const QRcode = require('qrcode')
const generatePayload = require('promptpay-qr')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: 'Heello by Souphakone'
    })
})

app.post('/generateQR', async (req, res) => {
    try {
        const amount = Number(req.body.amount)
        const mobileNumber = 'YOUR_PROMPTPAY_NUMBER'

        if (!Number.isFinite(amount) || amount <= 0) {
            return res.status(400).json({
                Rescode: 400,
                resMessage: 'Invalid amount'
            })
        }

        const payload = generatePayload(mobileNumber, { amount })

        const option = {
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            width: 300,
            margin: 2
        }

        const qrImage = await QRcode.toDataURL(payload, option)

        return res.status(200).json({
            Rescode: 200,
            resMessage: 'QR Code generated successfully',
            result: qrImage
        })
    } catch (err) {
        console.error('Error:', err)

        return res.status(500).json({
            Rescode: 500,
            resMessage: 'Failed to generate QR Code'
        })
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000...')
})

module.exports = app
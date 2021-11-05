const express = require('express')
const colors = require('colors')
require('dotenv').config({ path: './config/config.env' })

// Initialize database
const db = require('./config/db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/items', require('./api/routes/itemRoute'))
app.use('/api/v1/orders', require('./api/routes/orderRoute'))
app.use('/api/v1/users', require('./api/routes/userRoute'))

app.listen(process.env.PORT || 3000, console.log(`[SUCCESS] Server running on port ${process.env.PORT || 3000}`.green.bold))
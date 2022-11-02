require('dotenv').config()
const express = require('express')
const taskRoutes = require('./routes/task')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: ["https://task-app-mern.onrender.com"]
}))

app.use('/api/tasks', taskRoutes)

const PORT = process.env.PORT || 8888

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))
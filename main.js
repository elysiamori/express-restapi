import express from 'express'
import dotenv from 'dotenv'
import logReq from './src/middleware/middleware.js'
import UserRoutes from './src/routes/userRoutes.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

// [IMPLEMENT] Middleware  
app.use(logReq)
app.use(express.json())

// [IMPLEMENT] Routes
app.use('/users', UserRoutes)

// [SETUP] Server
app.listen(PORT, ()=>{
    console.log(`Server telah berjalan di port ${PORT}`)
})
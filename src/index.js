import express from 'express'
import AppRoutes from './routes/index.js'

const app = express()
app.use(express.json())
// app.use(cors())
app.use(AppRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>console.log(`App is listening ${PORT}`))
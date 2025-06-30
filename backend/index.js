import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./utils/connectDb.js"
import userRoutes from "./routes/userRoutes.js"
import dasboardRoutes from "./routes/dashboardroutes.js"
import cookieParser from 'cookie-parser'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3006;
const corsOption = {
    origin: process.env.CLIENT_URL,
    credentials:true
}
app.use(cors(corsOption))

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/data/',dasboardRoutes)
app.listen(PORT,()=>{
    connectDB();
    console.log(`server running on port : ${PORT}`)
})
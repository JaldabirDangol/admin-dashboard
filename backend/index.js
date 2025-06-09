import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./utils/connectDb.js"
import userRoutes from "./routes/userRoutes.js"


dotenv.config();

const app = express();
app.use(express());
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3006;

connectDB();

app.use('api/v1/user',userRoutes)
app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`)
})
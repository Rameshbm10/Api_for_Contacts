import express from "express";
import dotenv from "dotenv";
import router from "./routes/index"
import errorHandler from "./middleware/errorHandler";

dotenv.config();
const app=express();
const PORT=process.env.APP_PORT || 5000;

app.use(express.json())
app.use('/api/', router)
app.use(errorHandler)

app.listen(PORT,()=> console.log(`Listening on port ${PORT}`));
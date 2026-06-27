import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"
import path, { join } from "path"

dotenv.config();

const app = express();

const PORT=process.env.PORT|| 5001;

const __dirname=path.resolve()

if(process.env.NODE_ENV !=="production"){
app.use(cors());
}

app.use(express.json());
app.use(rateLimiter);


// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

app.use("/api/notes",notesRoutes);

if(process.env.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.use("*",(req,res)=>{
  res.sendFile(path.join(__dirname, "../frontend","dist","index.html"))
});

}
connectDB().then(()=>{
    app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
});


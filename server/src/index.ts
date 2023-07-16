import express from "express";
import { createServer } from "http";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ConnectToDatabase } from "./connection/db";
import authRoute from "./routes/userRoutes/authRoute";

dotenv.config();

// Create Express server
const app = express();
const httpServer = createServer(app);

// Middleware
    app.use(cors({
        origin: ["http://localhost:5173" ] ,
        methods: ['GET','PUT','PATCH','POST','DELETE'],
        credentials:true
    }));

    
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "Content-Type");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
      });

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./src/Public"));


// Routes
app.use("/", authRoute);

// Start the server
httpServer.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

// Connect to the database
ConnectToDatabase();

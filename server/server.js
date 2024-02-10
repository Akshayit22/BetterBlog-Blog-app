const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database");
const fileUpload = require("express-fileupload");
const cloudinary = require("./config/cloudinary");
const header_middleware = require("./middlewares/header");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
database.connect();

app.use(express.json());
app.use(header_middleware);
app.use(cookieParser());
app.use(cors());

app.options("*", cors());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudinary.cloudinaryConnect();



const userRoutes = require("./routes/User");
app.use("/api/v1/auth", userRoutes);


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Connection API",
  });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// const corsOptions = {
//   origin:process.env.CORS_ORIGIN,
//   Credential:true,
//   "allowHeaders":['sessionId','Content-Type'],
//   "exploseHeaders":['sessionId'],
//   "methods":"GET,POST,HEAD,PUT,PATCH,DELETE",
//   "preflightContinue":false
// }
// app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin:process.env.CORS_ORIGIN,
//      credentials: false,
//      maxAge: 14400,
//   })
// );


// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","*");
//   res.setHeader("Access-Control-Allow-Methods","POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers","Content-Type");
//   next();
// })

// app.options("*",(req,res)=>{
// })

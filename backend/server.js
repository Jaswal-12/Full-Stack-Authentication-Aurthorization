const express = require("express");
const cors = require("cors");
// const bcrypt = require("bcryptjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// import user from '../models/user.js'
// const User = require("./models/User.js");
const authRoutes = require("./routes/authRoutes.js");
const connectDB = require("./config/db.js");

const app = express();

connectDB();

// app.use(cors());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(authRoutes);

const port = 5000;

app.get("/", (req, res) => {
    res.send("Backend Building");
});



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
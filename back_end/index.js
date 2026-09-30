let express = require("express");
let mongoose = require("mongoose");
let app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Secure_file_storage")
    .then(() => {
        console.log("MongoDB database is connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });
app.get("/", (req, res) => {
    res.send("Secure File Storage Backend Running");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.use("/css", express.static(__dirname + '/css'));
app.use("/images", express.static(__dirname + '/images'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Skynet is active")
});
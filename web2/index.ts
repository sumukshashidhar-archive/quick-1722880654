const express = require("express");
const bodyParser = require("body-parser");
import Routes from "./routes/index";
const path = require("path");
const cookieParser = require("cookie-parser")

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())

Routes(app)

app.listen(3000, () => {
    console.log("Server is listening")
})

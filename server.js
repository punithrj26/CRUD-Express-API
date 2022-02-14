const express = require("express");
const { PORT,NODE_ENV } = require("./config");
const { DBConnection } = require("./config/db");
const StudentRoutes = require("./routes/student");

const morgan = require("morgan"); //to get log

const cors = require("cors"); //resourse sharing
const app = express();

let StartServer = async () => {
    
    /*---------------database connection ---------------------*/
    DBConnection();
    /*---------------end database connection ------------------*/
    /*------------------Middleware section start here --------------*/
    if (NODE_ENV === 'development') {
        app.use(morgan("dev"));
    }
    app.use(express.json());

    app.use(cors());
    /*------------------Middleware section end here --------------*/

    /*-----------load routes--------------------*/
    app.use("/api/students/", StudentRoutes);
    /*-----------load routes ended--------------------*/
    /*-------------listen port ------------------------------*/
    app.listen(PORT, err => {
        if (err) throw err;
        console.log("server is running on port number 5000");
    });
    /*-------------listen port ended here ------------------------------*/
};

StartServer();

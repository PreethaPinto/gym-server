import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import * as sql from "mssql";
const app = express();
app.use(bodyParser.json());
app.use(cors());

// test connection to SQL server using node-mssql
const sqlConfig = {
  user: "preethacp",
  password: "Rf6PVyj7B8!PNcT",
  server: "preethacp.database.windows.net",
  database: "HighStreetGym",
};

app.listen(8080, () => {
  console.log("Listening to port 8080");
});

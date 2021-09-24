import cors from "cors";
import express, { json } from "express";
import database from "./config/db";
import routes from "./routes";

const app = express();

const port = 3000;

app.use(json());
app.use(cors());

app.use(routes);

database.start();

app.listen(port, () => {
  console.log(`[API] Running in ${port}`);
});
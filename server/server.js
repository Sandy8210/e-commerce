import app from "./app.js";
import sequelize from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.DB_URL_PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("data base connection has been established");
    app.listen(PORT, () => {
      console.log(`Server Running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("unable to connect", err);
  });

import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import publicRoutes from "./routes/publicRoutes.js";
import maestroRoutes from "./routes/maestroRoutes.js";
import estudianteRoutes from "./routes/estudianteRoutes.js";
import cors from "cors";

//Inicializamos express
const app = express();

//Le decimos que le enviaremos datos en json a express
app.use(express.json());

//Config variables de entorno
dotenv.config();

conectarDB();

//Permitio conexiones de domino con CORS
const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      //El origen del Request esta permitido
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/api", publicRoutes, maestroRoutes, estudianteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

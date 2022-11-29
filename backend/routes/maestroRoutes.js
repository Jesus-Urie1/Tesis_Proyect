import express from "express";
import {
  infoClase,
  obtenerClases,
  nuevoAnuncio,
} from "../controllers/maestroController.js";
import maestroAuth from "../middleware/maestroAuthMiddleware.js";

const router = express.Router();

//Area privada

router.get("/infoClase/:grupo", maestroAuth, infoClase);
router.get("/obtenerClases", maestroAuth, obtenerClases);
router.post("/nuevoAnuncio", maestroAuth, nuevoAnuncio);

export default router;

import express from "express";
import {
  nuevaClase,
  infoClase,
  obtenerClases,
  nuevoAnuncio,
} from "../controllers/maestroController.js";
import maestroAuth from "../middleware/maestroAuthMiddleware.js";

const router = express.Router();

//Area privada
router.post("/nuevaClase", maestroAuth, nuevaClase);
router.get("/infoClase/:codigo", maestroAuth, infoClase);
router.get("/obtenerClases", maestroAuth, obtenerClases);
router.post("/nuevoAnuncio", maestroAuth, nuevoAnuncio);

export default router;

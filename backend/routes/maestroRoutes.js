import express from "express";
import {
  infoClase,
  obtenerClases,
  nuevoAnuncio,
  nuevaListaA,
  nuevaActitud,
  agregarActitud,
} from "../controllers/maestroController.js";
import maestroAuth from "../middleware/maestroAuthMiddleware.js";

const router = express.Router();

//Area privada
router.get("/infoClase/:grupo", maestroAuth, infoClase);
router.get("/obtenerClases", maestroAuth, obtenerClases);
router.post("/nuevoAnuncio", maestroAuth, nuevoAnuncio);
router.post("/nuevaListaA", maestroAuth, nuevaListaA);
router.post("/nuevaActitud", maestroAuth, nuevaActitud);
router.post("/agregarActitud", maestroAuth, agregarActitud);
export default router;

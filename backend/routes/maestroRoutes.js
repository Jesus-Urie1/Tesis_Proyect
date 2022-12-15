import express from "express";
import {
  entrarGrupo,
  obtenerGrupos,
  nuevoAnuncio,
  nuevaListaA,
  nuevaConducta,
  agregarConductaAlumno,
  maestrosGrupo,
  alumnosGrupo,
} from "../controllers/maestroController.js";

import maestroAuth from "../middleware/maestroAuthMiddleware.js";

const router = express.Router();

//Area privada
router.get("/obtenerGrupos", maestroAuth, obtenerGrupos);
alumnosGrupo;

router.post("/alumnosGrupo", maestroAuth, alumnosGrupo);
router.post("/maestrosGrupo", maestroAuth, maestrosGrupo);
router.post("/entrarGrupo", maestroAuth, entrarGrupo);
router.post("/nuevoAnuncio", maestroAuth, nuevoAnuncio);
router.post("/nuevaListaA", maestroAuth, nuevaListaA);
router.post("/nuevaConducta", maestroAuth, nuevaConducta);
router.post("/agregarConductaAlumno", maestroAuth, agregarConductaAlumno);

export default router;

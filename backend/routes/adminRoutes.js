import express from "express";
import {
  nuevoGrupo,
  registrar,
  obtenerMaestros,
  obtenerAlumnos,
  obtenerGrupos,
} from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post("/nuevoGrupo", adminAuth, nuevoGrupo);
router.post("/registrar", adminAuth, registrar);
router.get("/obtenerMaestros", obtenerMaestros);
router.get("/obtenerAlumnos", obtenerAlumnos);
router.get("/obtenerGrupos", obtenerGrupos);

export default router;

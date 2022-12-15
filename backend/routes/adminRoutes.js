import express from "express";
import {
  registrarMaestro,
  obtenerMaestros,
  obtenerAlumnos,
  obtenerGrupos,
} from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post("/registrarMaestro", adminAuth, registrarMaestro);
router.get("/obtenerMaestros", adminAuth, obtenerMaestros);
router.get("/obtenerAlumnos", adminAuth, obtenerAlumnos);
router.get("/obtenerGrupos", adminAuth, obtenerGrupos);

export default router;

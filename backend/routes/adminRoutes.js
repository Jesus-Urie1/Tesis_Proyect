import express from "express";
import { nuevoGrupo, registrar } from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post("/nuevoGrupo", adminAuth, nuevoGrupo);
router.post("/registrar", adminAuth, registrar);

export default router;

import express from "express";
import { perfil } from "../controllers/privateController.js";
import checkAuth from "../middleware/authMiddleware.js";
import { nuevoGrupo } from "../controllers/privateController.js";

const router = express.Router();

//Area privada
router.get("/perfil", checkAuth, perfil);
router.post("/nuevoGrupo", checkAuth, nuevoGrupo);

export default router;

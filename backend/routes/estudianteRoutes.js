import express from "express";
import { entrarGrupo } from "../controllers/estudianteController.js";
import estudianteAuth from "../middleware/estudianteAuthMiddleware.js";

const router = express.Router();

//Area privada
router.post("/entrarClase", estudianteAuth, entrarGrupo);

export default router;

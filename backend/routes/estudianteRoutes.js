import express from "express";
import { entrarClase } from "../controllers/estudianteController.js";
import estudianteAuth from "../middleware/estudianteAuthMiddleware.js";

const router = express.Router();

//Area privada
router.post("/entrarClase", estudianteAuth, entrarClase);

export default router;

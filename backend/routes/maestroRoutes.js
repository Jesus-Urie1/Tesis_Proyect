import express from "express";
import { nuevaClase } from "../controllers/maestroController.js";
import maestroAuth from "../middleware/maestroAuthMiddleware.js";

const router = express.Router();

//Area privada
router.post("/nuevaClase", maestroAuth, nuevaClase);

export default router;

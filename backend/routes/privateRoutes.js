import express from "express";
import { nuevaClase } from "../controllers/privateController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//Area privada
router.post("/nuevaClase", checkAuth, nuevaClase);

export default router;

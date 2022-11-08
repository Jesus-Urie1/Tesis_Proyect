import express from "express";
import { perfil } from "../controllers/privateController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//Area privada
router.get("/perfil", checkAuth, perfil);

export default router;

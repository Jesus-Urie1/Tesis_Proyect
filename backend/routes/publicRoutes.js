import express from "express";
import {
  registrar,
  confirmar,
  authenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/publicController.js";

const router = express.Router();

//Area publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", authenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

export default router;

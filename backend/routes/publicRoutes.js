import express from "express";
import {
  authenticar,
  // confirmar,
  // olvidePassword,
  // comprobarToken,
  // nuevoPassword,
} from "../controllers/publicController.js";

const router = express.Router();

//Area publica
router.post("/login", authenticar);
// router.get("/confirmar/:token", confirmar);
// router.post("/olvide-password", olvidePassword);
// router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

export default router;

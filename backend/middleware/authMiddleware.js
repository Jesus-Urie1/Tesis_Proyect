import jwt from "jsonwebtoken";
import Administracion from "../models/Administracion.js";
import Alumno from "../models/Alumno.js";
import Maestro from "../models/Maestro.js";

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Buscando mediante el ID al Usuario

      const admin = await Administracion.findById(decoded.id).select(
        "-password -token"
      );

      const maestro = await Maestro.findById(decoded.id).select(
        "-password -token"
      );

      const alumno = await Alumno.findById(decoded.id).select(
        "-password -token"
      );

      if (admin) {
        req.usuario = admin;
      }

      if (maestro) {
        req.usuario = maestro;
      }

      if (alumno) {
        req.usuario = alumno;
      }

      if (!req.usuario) {
        const e = new Error(" Token no valido ");
        res.status(403).json({ msg: e.message });
      }
      return next();
    } catch (error) {
      const e = new Error(" Token no valido ");
      res.status(403).json({ msg: e.message });
    }
  }

  //No se mando ningun token
  if (!token) {
    const error = new Error("Token no valido o inexistente");
    return res.status(403).json({ msg: error.message });
  }

  next();
};

export default checkAuth;

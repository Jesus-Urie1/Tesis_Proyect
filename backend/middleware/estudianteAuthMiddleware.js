import jwt from "jsonwebtoken";
import Alumno from "../models/Alumno.js";

const estudianteAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Buscando mediante el ID al estudiante
      req.usuario = await Alumno.findById(decoded.id).select(
        "-password -token -confirmado"
      );

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
};

export default estudianteAuth;

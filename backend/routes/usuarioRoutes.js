import express from "express";
const router = express.Router();

import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/usuarioController.js";

// Autenticación, Registro y Confirmación de Usuarios
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword); // esqueceu senha
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

export default router;

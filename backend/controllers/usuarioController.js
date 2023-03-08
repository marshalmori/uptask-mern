import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";

const registrar = async (req, res) => {
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });

  if (existeUsuario) {
    const error = new Error("Usuário já cadastrado.");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const usuarioAlmacenado = await usuario.save();
    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log(error);
  }

  res.json({ msg: "Criar usuário" });
};

const autenticar = async (req, res) => {};

export { registrar, autenticar };

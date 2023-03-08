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

const autenticar = async (req, res) => {
  const { email, password } = req.body;

  //Verificar se o usuário existeUsuario
  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    const error = new Error("Usuário não existe.");
    return res.status(404).json({ msg: error.message });
  }

  //Verificar se o usuário confirmou o cadastro (email recebido pelo usuário)
  if (!usuario.confirmado) {
    const error = new Error("Sua conta não foi confirmada.");
    return res.status(403).json({ msg: error.message });
  }

  // Verificar a senha (password)
};

export { registrar, autenticar };

import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const usuarioAlmacenado = await usuario.save();
    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log(error);
  }

  res.json({ msg: "Criar usuário" });
};

export { registrar };

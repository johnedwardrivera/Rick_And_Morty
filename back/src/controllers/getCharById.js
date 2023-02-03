//funciones encargado de toda la parte de la logica
const axios = require("axios");
const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await result.data;

    // let character = {
    //   id: data.id,
    //   name: data.name,
    //   image: data.image,
    //   gender: data.gender,
    //   species: data.species,
    // };
    res.json(data);
  } catch (error) {
    res.status(500).send(`El personaje con id:${id} no fue encontrado`);
  }
};
module.exports = getCharById;

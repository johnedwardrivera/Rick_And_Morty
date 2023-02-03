const axios = require("axios");
const getCharDetail = (req, res) => {
  const { id } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin.name,
      };
      res.json(character);
    })
    .catch((err) =>
      res.status(500).send(`El personaje con id:${id} no fue encontrado`)
    );
};
module.exports = getCharDetail;

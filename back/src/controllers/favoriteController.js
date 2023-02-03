let fav = [];
const postFavorite = (req, res) => {
  fav.push(req.body);
  res.status(201).json(fav); // que no sea texto plano
};

const deleteFavorite = (req, res) => {
  const { id } = req.params;

  fav = fav.filter((favorites) => favorites.id != id);
  res.json(fav);
};
module.exports = { postFavorite, deleteFavorite };

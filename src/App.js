import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Detail from "./components/Detail";

// import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
// import SearchBar from "./components/SearchBar.jsx";
import Nav from "./components/Nav";
import Form from "./components/Form";

function App() {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const username = "edwardrivera0294@gmail.com";
  const password = "02mono";
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password == password && userData.username == username) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  const location = useLocation();
  const onSearch = (character) => {
    let existeCharacter = existe(character);
    console.log(existeCharacter);
    existeCharacter &&
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    // console.log(character.characterName);
    // const example = {
    //   name: "Morty Smith",
    //   species: "Human",
    //   gender: "Male",
    //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    // };
    // setCharacters([example]);
  };
  const onClose = (id) => {
    const data = characters.filter((character) => character.id !== id);
    console.log(data);
    setCharacters(data);
  };
  const existe = (id) => {
    let existeId = true;
    if (characters.length > 0) {
      characters.map((characterExiste) => {
        if (characterExiste.id == id) {
          existeId = false;
        }
      });
    }
    return existeId;
  };

  return (
    <div className="App">
      {location.pathname != "/" && <Nav logout={logout} onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="detail/:detailId" element={<Detail />}></Route>
        <Route path="/" element={<Form login={login} />}></Route>
      </Routes>
    </div>
  );
}

export default App;

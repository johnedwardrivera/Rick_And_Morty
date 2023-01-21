import { useState } from "react";
import validate from "./validation";
import style from "../components/styles/form.jsx.module.css";
const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evento) => {
    const name = evento.target.name; //  <inpu type="text" name="email"
    const value = evento.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(validate({ ...userData, [name]: value }));
  };
  const handleSubbmit = (event) => {
    login(userData);
  };
  return (
    <div className={style.container}>
      <form action="" onSubmit={handleSubbmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Escribe tu email..."
          className={style.input}
        />
        <p> {errors?.username}</p>
        <label htmlFor="password">password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Escribe tu password..."
          className={style.input}
        />
        {/* <p> {errors?.password}</p> */}
        <br />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};
export default Form;

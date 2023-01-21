const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPassword = /\d/.test;
const validate = (userData) => {
  const errors = {};

  if (!regexEmail.test(userData.username)) {
    errors.username = "Debe ser un correo electrónico";
  }
  if (!userData.username) {
    errors.username = "El nombre de usuario no puede estar vacío";
  }
  if (userData.username.length > 35) {
    errors.username =
      "el nombre de usuario no puede tener más de 35 caracteres";
  }
  // if (!regexPassword.test(userData.password)) {
  //   errors.password = "la contraseña tiene que tener al menos un número.";
  // }

  return errors;
};
export default validate;

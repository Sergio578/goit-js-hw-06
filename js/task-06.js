/*Escriba un script que, si se pierde el enfoque en un input (evento blur), el script comprobará el contenido del instupt para ver si el número de símbolos introducidos es correcto.*/

/*El número de símbolos que debe tener un input se especifica en su atributo data-length.
Si se introduce el número correcto de símbolos, border del intuplet se convierte en verde, si no es correcto se vuelve rojo.
Para añadir estilos, use las clases CSS valid e invalid, que ya tenemos añadido a los archivos de origen del trabajo.*/

     const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const length = +input.getAttribute("data-length");
  const value = input.value;

  if (value.length === length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
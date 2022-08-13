
// Seleccionar el boton y cambiar los estilos del headline
const buttons = document.querySelectorAll(".button");
const headlines = document.querySelectorAll("h1");

const cambiarColorElemento = (selector, color) => {
  const element = document.querySelector(selector);
  element.style.color = color;
}

const alternarActiveClass = (element) => {
  if (element.classList.contains("active")) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const selector = e.target.dataset['headline'];
    cambiarColorElemento(selector, "red");
  });
});

headlines.forEach(headline => {
  headline.addEventListener("click", (e) => {
    alternarActiveClass(e.target);
  });
});

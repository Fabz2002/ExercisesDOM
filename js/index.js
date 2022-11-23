import hamburguer from "./dom/menu_hamburguer.js";
import { digitalClock, alarm } from "./dom/clock.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguer(".dashboard__btn", ".dashboard__aside", ".menu__item");
  digitalClock("#clock", "#activar-reloj", "#desactivar-reloj");
  alarm("./../assets/cancion.mp3", "#activar-alarma", "#desactivar-alarma");
});

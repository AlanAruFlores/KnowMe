import { activarCamaraMicrofono } from "./activar_camara_microfono.js";
import { compartirPantalla } from "./compartir_pantalla.js";
import { exitMeet } from "./salir.js";

const d = document;

d.addEventListener("DOMContentLoaded", ()=>{
    activarCamaraMicrofono(".main__webcam");
    compartirPantalla(".main__window__shared");
    exitMeet(".exit_buttom");
})
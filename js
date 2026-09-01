const toggle = document.getElementById("darkModeToggle");

function aplicarModoOscuro(valor){

document.body.classList.toggle("dark", valor);

toggle.innerHTML = valor ? "☀️" : "🌙";

localStorage.setItem("modo-oscuro", valor);

}

const guardado = localStorage.getItem("modo-oscuro");

if(guardado !== null){

aplicarModoOscuro(guardado === "true");

}

toggle.addEventListener("click", () => {

const estado =
!document.body.classList.contains("dark");

aplicarModoOscuro(estado);

toggle.animate(
[
{transform:"rotate(0deg)"},
{transform:"rotate(360deg)"}
],
{
duration:600,
easing:"ease-out"
}
);

});

/* Animación al scroll */

const elementos =
document.querySelectorAll(".fade-up");

const observador =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

elementos.forEach(el=>{

observador.observe(el);

});

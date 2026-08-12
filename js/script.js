const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 80) {
navbar.style.background = "rgba(9, 41, 19, 0.95)";
navbar.style.padding = "14px 8%";
navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
} else {
navbar.style.background = "rgba(8,32,16,.55)";
navbar.style.padding = "18px 8%";
navbar.style.boxShadow = "none";
}
});

const elementos = document.querySelectorAll(
".card, .ods-card, .tech-box, .member, .objective, .step"
);

elementos.forEach((item) => {
item.style.opacity = "0";
item.style.transform = "translateY(60px)";
item.style.transition = ".7s";
});

function revelar() {
elementos.forEach((item) => {
const posicion = item.getBoundingClientRect().top;


    if (posicion < window.innerHeight - 80) {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
    }
});


}

window.addEventListener("scroll", revelar);
revelar();

const boton = document.createElement("button");

boton.innerHTML = "↑";
boton.className = "topButton";

document.body.appendChild(boton);

window.addEventListener("scroll", () => {
if (window.scrollY > 400) {
boton.style.opacity = "1";
boton.style.pointerEvents = "auto";
} else {
boton.style.opacity = "0";
boton.style.pointerEvents = "none";
}
});

boton.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
});

const titulo = document.querySelector(".hero h1");
const texto = titulo.innerText;

titulo.innerText = "";

let i = 0;

function escribir() {
if (i < texto.length) {
titulo.innerHTML += texto.charAt(i);
i++;
setTimeout(escribir, 120);
}
}

window.addEventListener("load", escribir);

const tarjetas = document.querySelectorAll(
".card, .tech-box, .ods-card"
);

tarjetas.forEach((card) => {
card.addEventListener("mousemove", (e) => {
const x = e.offsetX;
const y = e.offsetY;


    card.style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(34,197,94,.15),
        white 60%
    )`;
});

card.addEventListener("mouseleave", () => {
    card.style.background = "white";
});


});

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
let current = "";


sections.forEach((section) => {
    const top = section.offsetTop - 120;

    if (window.scrollY >= top) {
        current = section.getAttribute("id");
    }
});

links.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
    }
});


});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");

if (navLinks.classList.contains("active")) {
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x-lg");
} else {
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-list");
}


});

const enlacesMenu = document.querySelectorAll(".nav-links a");

enlacesMenu.forEach((enlace) => {
enlace.addEventListener("click", () => {
navLinks.classList.remove("active");
icon.classList.remove("bi-x-lg");
icon.classList.add("bi-list");
});
});

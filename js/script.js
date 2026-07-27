//==============================
// NAVBAR EFECTO SCROLL
//==============================

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

//==============================
// REVELAR SECCIONES
//==============================

const elementos = document.querySelectorAll(
    ".card, .ods-card, .tech-box, .member, .objective, .step"
);

const revelar = () => {

    elementos.forEach((item) => {

        const posicion = item.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 80) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

};

elementos.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = ".7s";

});

window.addEventListener("scroll", revelar);

revelar();


//==============================
// BOTÓN SUBIR
//==============================

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

boton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


//==============================
// EFECTO HERO
//==============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;

});

//==============================
// EFECTO ESCRITURA DEL TÍTULO
//==============================

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

window.onload = escribir;


//==============================
// EFECTO HOVER EN TARJETAS
//==============================

const tarjetas = document.querySelectorAll(".card, .tech-box, .ods-card");

tarjetas.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(34,197,94,.15),
        white 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "white";

    });

});


//==============================
// MENÚ ACTIVO
//==============================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current="";

    sections.forEach(section=>{

        const top = section.offsetTop-120;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});
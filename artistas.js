const hero = document.getElementById("hero");
const heroLogo = document.getElementById("hero-logo");

const artistas = [
  {
    imagen: "img/EKOYEULE.webp",
    logo: "img/LOGOYEULE.webp"
  },
  {
    imagen: "img/POPTROPI.webp",
    logo: "img/LOGOPOPTROPICA.webp"
  }
];

let i = 0;

setInterval(() => {
  i = (i + 1) % artistas.length;
  heroLogo.style.opacity = 0;

  setTimeout(() => {
    hero.style.backgroundImage = `url(${artistas[i].imagen})`;
    heroLogo.src = artistas[i].logo;
    heroLogo.style.opacity = 1;
  }, 800);
}, 6000);


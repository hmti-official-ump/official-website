//matikan fitur auto scroll default
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

//default hash
window.addEventListener("load", () => {
  if (!window.location.hash) {
    window.location.hash = "#beranda";
  } else {
    window.scrollTo(0, 0); //posisi selalu di atas
  }
});

//Effek hidup navigasi
const list_a = document.querySelectorAll(".navbar-nav a");
function gantiLink() {
  const hash = window.location.hash;
  list_a.forEach(function (a) {
    if (a.getAttribute("href") === hash) {
      a.classList.add("aktif");
    } else {
      a.classList.remove("aktif");
    }
  });
}
gantiLink();
window.addEventListener("hashchange", gantiLink);

// hidupkan menu
const hitam = document.getElementById("hitam");
const bodyHtml = document.body;
const navAktif = document.querySelector(".navbar-nav");
const navMenu = document.querySelector("#nav-menu");
navMenu.onclick = () => {
  navAktif.classList.toggle("aktif");
  bodyHtml.classList.toggle("aktif");
  hitam.classList.toggle("aktif");
};

//tutup menu
document.addEventListener("click", function(a){
  if(!navAktif.contains(a.target) && !navMenu.contains(a.target)){
    navAktif.classList.remove("aktif");
    bodyHtml.classList.remove("aktif");
    hitam.classList.remove("aktif");
  };
});

//effek scroll nav-bar
document.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (scrollY > 0) {
    navbar.classList.add("discroll");
  } else {
    navbar.classList.remove("discroll");
  }
});

//dapatkan total foto
const totalFoto = document.querySelectorAll(".album-tumbnail img").length;
document.getElementById("total-foto").innerHTML = totalFoto;
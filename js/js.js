//matikan fitur auto scroll default
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
// event
window.addEventListener("load", function () {
  document.getElementById("loading-screen").classList.add("hide-anim");
  AOS.init({
    once: true,
  });
});

// effect active
function setAktif() {
  document.querySelectorAll(".divisi-nav .nav-link").forEach((el) => el.classList.remove("active"));
  const hash = location.hash || "#bph";
  const target = document.querySelector(`.divisi-nav a[href="${hash}"]`);

  if (target) {
    target.classList.add("active");
  }
}

// scroll effek
document.getElementById("cta").onclick = () => {
  window.scrollBy({
    top: 500, // jarak scroll (px)
    behavior: "smooth",
  });
};

window.addEventListener("load", setAktif());
window.addEventListener("hashchange", setAktif);

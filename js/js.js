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

const $menu = document.querySelector(".nav-link"),
  $btnhg = document.querySelector(".hamburger");

$btnhg.addEventListener("click", (e) => {
  $menu.classList.toggle("active");
  $btnhg.classList.toggle("is-active");
});

window.addEventListener("click", (e) => {
  if ($btnhg.classList.contains("is-active") && e.target != $btnhg) {
    $menu.classList.toggle("active");
    $btnhg.classList.toggle("is-active");
  }
});

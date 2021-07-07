let search = document.querySelector(".search-button");
let modal = document.querySelector(".search-form");

search.addEventListener("click", function (e) {
  e.preventDefault(),
    modal.classList.toggle("search-form-show")
}),
  window.addEventListener("keydown", function (e) {
    27 === e.keyCode && modal.classList.contains("search-form-show")
      && modal.classList.remove("search-form-show")
  });

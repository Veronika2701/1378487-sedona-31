const search = document.querySelector(".search-button");
const modal = document.querySelector(".search-form");
const form = document.querySelector("form");
const beginDate = document.querySelector("[name=beginDate]");
const endDate = document.querySelector("[name=endDate]");
const people = document.querySelector("[name=people]");
const kids = document.querySelector("[name=kids]");
const peopleCount = localStorage.getItem("people");
const kidsCount = localStorage.getItem("kids");


if (peopleCount) {
  people.value = peopleCount;
}
if (kidsCount) {
  kids.value = kidsCount;
}
search.addEventListener("click", function (e) {
  e.preventDefault(),
    modal.classList.toggle("search-form-show");
}),
  window.addEventListener("keydown", function (e) {
    27 === e.keyCode && modal.classList.contains("search-form-show")
      && modal.classList.remove("search-form-show")
  });

form.addEventListener("submit", function (evt) {
  modal.classList.remove("modal-error");
  if (!beginDate.value || !endDate.value) {
    evt.preventDefault();
    setTimeout(() => {
      modal.classList.add("modal-error");
    }, 0)
  }

  if (people.value) {
    localStorage.setItem("people", people.value)
  }
  if (kids.value) {
    localStorage.setItem("kids", kids.value)
  }
});

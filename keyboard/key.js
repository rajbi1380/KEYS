const itme2 = document.querySelector(".item2");
const p = document.querySelector("p");
itme2.addEventListener("keydown", function (event) {
  if (event.code == "KeyA") {
    p.classList.add("active");
  }
});
itme2.addEventListener("keyup", function (event) {
  if (event.code == "KeyA") {
    p.classList.remove("active");
  }
});

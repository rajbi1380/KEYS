// const item2 = document.querySelector(".keyboard");
const i1 = document.querySelectorAll(".item2");

i1.addEventListener("keydown", function (event) {
  if (event.code == "KeyA" && event.ctrlKey) {
    console.log("a");
    // i1.classList.toggle("active");
  }
});

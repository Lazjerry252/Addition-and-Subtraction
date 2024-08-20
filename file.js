const count = document.querySelector(".js-count");
const subtract_btn = document.querySelector(".js-subtract");
const add_btn = document.querySelector(".js-add");

 counting = 0;

add_btn.addEventListener("click", () => {
 addButton();
})

subtract_btn.addEventListener("click", () => {
  subtractButton();
})

function addButton() {
    if(counting >= counting) {
      counting = counting + 1;
      count.innerHTML = counting;
     }
  }

function subtractButton() {
  if (counting <= counting) {
    counting = counting - 1;
      count.innerHTML = counting;
  }
}

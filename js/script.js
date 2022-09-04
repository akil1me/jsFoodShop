let elForm = document.querySelector(".hero__form");
let elInput = elForm.querySelector(".hero__input");
let elInputCheck = elForm.querySelector(".hero__input-chek");
let elList = document.querySelector(".hero__list");

let arr = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elInput.value;
  let inputCheck = elInputCheck.checked;

  let elListItem = document.createElement("li");

  if (inputCheck == true) {
    arr.unshift(inputValue);
    elListItem.textContent = inputValue;
    elList.prepend(elListItem)

  }
  else {
    arr.push(inputValue);
    elListItem.textContent = inputValue;
    elList.appendChild(elListItem);
  }
  localStorage.clear();

  localStorage.setItem("maxsulotlar", arr);

  elInput.value = "";

  elForm.addEventListener("reset", function (evt2) {
    evt2.preventDefault();
    elList.innerHTML = null;

    arr.splice(0, arr.length);
  })
})



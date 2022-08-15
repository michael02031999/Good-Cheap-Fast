let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let thirdInput = document.getElementById("thirdInput");

firstInput.addEventListener("click", inputCheck1);
secondInput.addEventListener("click", inputCheck2);
thirdInput.addEventListener("click", inputCheck3);

function inputCheck1() {
  console.log(firstInput.checked);
  console.log(secondInput.checked);
  console.log(thirdInput.checked);

  if (firstInput.checked == true && secondInput.checked == true) {
    thirdInput.checked = false;
  }
}

function inputCheck2() {
  console.log(secondInput.checked);
  console.log(firstInput.checked);
  console.log(thirdInput.checked);

  if (secondInput.checked == true && thirdInput.checked == true) {
    firstInput.checked = false;
  }
}

function inputCheck3() {
  console.log(thirdInput.checked);
  console.log(secondInput.checked);
  console.log(firstInput.checked);

  if (secondInput.checked == true && firstInput.checked == true) {
    secondInput.checked = false;
  }
}

let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let result = document.querySelector("#res");
let eval = document.querySelector("#evaluation");

document.querySelector("#submit").addEventListener("click", function () {
  let loc_weight = Number(weight.value);
  let loc_height = Number(height.value);

  let bmi = calcBMI(loc_weight, loc_height);
  if (bmi >= 30) {
    eval.style.color = "red";
    eval.innerHTML = "Obese!!!!";
  } else if (bmi >= 25 && bmi <= 29.9) {
    eval.style.color = "red";
    eval.innerHTML = "Overweight!!";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    eval.style.color = "green";
    eval.innerHTML = "Normal!";
  } else if (bmi < 18.5) {
    eval.style.color = "red";
    eval.innerHTML = "Underweight!";
  } else if (isNaN(bmi)) {
    eval.style.color = "red";
    eval.innerHTML = "Please input proper inputs!";
  }
  result.innerHTML = bmi.toFixed(1);
});

function calcBMI(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

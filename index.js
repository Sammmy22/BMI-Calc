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
  } else if (bmi == NaN) {
    eval.style.color = "red";
    eval.innerHTML = "Please input values.";
  } else {
    eval.style.color = "blue";
    eval.innerHTML = "Underweight!";
  }
  result.innerHTML = bmi.toFixed(1);
});

function calcBMI(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

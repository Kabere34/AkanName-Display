const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function myFormValidate() {
  let genderOptions = document.getElementsByName("gender");
  let gender;
  for (let i = 0; i < genderOptions.length; i++) {
    if (genderOptions[i].checked) {
      gender = genderOptions[i].value;
      console.log(gender);
    }
  }
  let date = document.getElementById("birthday").value;
  let DD = parseInt(date.slice(8));
  console.log(date);
  console.log(DD);
  let MM = parseInt(date.slice(5, 7));
  console.log(MM);
  let CC = parseInt(date.slice(0, 2));
  console.log(CC);
  let YY = parseInt(date.slice(2, 4));
  console.log(YY);
  console.log(typeof date);
  let day =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  console.log(Math.trunc(day), typeof Math.trunc(day), day, "date");

  day = Math.trunc(day);
}

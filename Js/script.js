// const dayOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
const maleNames = [
  {
    Sunday: "Kwasi",
  },
  {
    Monday: "Kwadwo",
  },
  {
    Tuesday: "Kwabena",
  },
  {
    Wednesday: "Kwaku",
  },
  {
    Thursday: "Yaw",
  },
  {
    Friday: "Kofi",
  },
  {
    Saturday: "Kwame",
  },
];

const femaleNames = [
  {
    Sunday: "Akosua",
  },
  {
    Monday: "Adwoa",
  },
  {
    Tuesday: "Abenaa",
  },
  {
    Wednesday: "Akua",
  },
  {
    Thursday: "Yaa",
  },
  {
    Friday: "Afua",
  },
  {
    Saturday: "Ama",
  },
];

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

  // if (day === 0 && gender == "male") {
  //   // document.getElementById("p1").innerHTML = maleNames[0];
  //   console.log(maleNames[0]);
  // }
  //   if (day === 0 && gender == "male") {
  //     console.log(maleNames[0])(Object.value(maleNames[0]));
  //   }
  checkNameOfDay(day, gender);
}

//checkNameofDay(day)
function checkNameOfDay(day, gender) {
  let nameOfDay;
  if (day === 0) {
    gender === "male"
      ? (nameOfDay = Object.values(maleNames[0]))
      : (nameOfDay = Object.values(femaleNames[0]));
    console.log("na,eOfDay :>> ", nameOfDay);
  }
  if (day === 1) {
    gender === "male"
      ? (nameOfDay = Object.values(maleNames[1]))
      : (nameOfDay = Object.values(femaleNames[1]));
    console.log("na,eOfDay :>> ", nameOfDay);
  }
  if (day === 2) {
    gender === "male"
      ? (nameOfDay = Object.values(maleNames[2]))
      : (nameOfDay = Object.values(femaleNames[2]));
    console.log("na,eOfDay :>> ", nameOfDay);
  }
  if (day === 3) {
    gender === "male"
      ? (nameOfDay = Object.values(maleNames[3]))
      : (nameOfDay = Object.values(femaleNames[3]));
    console.log("na,eOfDay :>> ", nameOfDay);
  }
  if (day === 4) {
    gender === "male"
      ? (nameOfDay = Object.values(maleNames[4]))
      : (nameOfDay = Object.values(femaleNames[4]));
    console.log("na,eOfDay :>> ", nameOfDay);
  }
  if (day === 5) {
    gender === "male"
      ? (nameOfDay = Object.values(maleNames[5]))
      : (nameOfDay = Object.values(femaleNames[5]));
    console.log("na,eOfDay :>> ", nameOfDay);
  }
  if (day === 6) {
    gender === "male"
      ? (nameOfDay = Object.values(maleNames[6]))
      : (nameOfDay = Object.values(femaleNames[6]));
    console.log("na,eOfDay :>> ", nameOfDay);
  }
  document.getElementById("p1").innerHTML = `Your Akan name is ${nameOfDay}`;
  // return nameOfDay;

  //   let namedisplay = checkNameOfday(day);
  //   {
  //     console.log("yaaay");
  //   }
}

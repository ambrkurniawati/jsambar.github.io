console.log("Hello World");

//Deklarasi variabel
let name = "Ambar Kurniawati";
console.log(name);

let firstName = "Ambar";
let lastName = "Kurniawati";
console.log(firstName + " " + lastName);

let number1 = 10;
let number2 = 2;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

//if, else, else if
const number = 30;
if (number % 3 === 0) {
  console.log("bilangan adalah kelipatan 3");
} else if (number % 3 === 1) {
  console.log("bilangan memiliki sisa 1 apabila dibagi 3");
} else {
  console.log("bilangan memiliki sisa 2 apabila dibagi 3");
}

//boolean
const numberr = 10;
console.log(numberr > 8);
console.log(numberr > 12);

// dan (&&) atau (||)
const nomor = 20;
if (nomor >= 10 && nomor < 100) {
  console.log("nomor berdigit 2");
}

//switch
const color = "red";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("drive carefully");
    break;
  case green:
    console.log("go");
    break;
}

//while dan for
let loncatan = 1;
while (loncatan <= 100) {
  console.log("loncatan ke " + loncatan);
  loncatan++;
}
for (let loncatan = 1; loncatan <= 100; loncatan++) {
  console.log("loncatan ke " + loncatan);
}

for (let bil = 1; bil <= 100; bil++) {
  if (bil % 2 == 0) {
    console.log("kelipatan 2");
  } else {
    console.log(bil);
  }
}

//Array
const fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[0]);
console.log("this is " + fruits[2]);
//mengubah element array:
fruits[1] = "watermelon";
console.log(fruits);
console.log("Mark very likes " + fruits[1]);

//Array and loop
for (let i = 0; i < fruits.length; i++) {
  //length menghitung indeks dimulai dari 0
  console.log(fruits[i]);
}
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

//Object
const item = { makeup: "eyeshadow", price: 70 };
console.log(item);
console.log(item.makeup);
//update
item.price = 75;
console.log(item);

//object sebagai element array
const items = [
  { makeup: "eyeshadow", price: 75 },
  { makeup: "lipstick", price: 45 },
  { makeup: "blush", price: 30 },
];
console.log(items);
console.log(items.makeup); //jawabannya undefined
console.log(items[1]);

const vocals = [
  { name: "Kim Doyoung", age: 25 },
  { name: "Moon Taeil", age: 27 },
  { name: "Lee Haechan", age: 21 },
];
for (let i = 0; i < vocals.length; i++) {
  const vocal = vocals[i];
  console.log(`My name is ${vocal.name}`);
  console.log(`I am ${vocal.age} years old`);
}

//Object bersarang
const about = {
  name: "Ambar Kurniawati",
  age: 23,
  favourite: {
    food: "mie goreng",
    drink: "teh manis",
    group: "nct",
  },
};
console.log(about.name);
console.log(about.age);
console.log(about.favourite);
console.log(about.favourite.group);

//function -> const functionName = function() {code};
const hellofuture = function () {
  console.log("nct");
  console.log("dream");
};
hellofuture();

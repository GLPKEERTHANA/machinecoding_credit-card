const numberLabel = document.getElementById("number");

const nameLabel = document.getElementById("name");
const edateLabel = document.getElementById("date");
const cvvLabel = document.getElementById("cvv");

const numberInput = document.getElementById("cardnumber-input");

const nameInput = document.getElementById("cardname-input");

const dateInput = document.getElementById("edate-input");

const cvvInput = document.getElementById("cvv-input");

let addSpaces = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 4 === 0) {
      result.push(" ");
    }
    result.push(input[i]);
  }
  return result.join("");
};

let addSlash = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0 && i != 0) {
      //because 0%2 === 0 is true
      result.push("/");
    }
    result.push(input[i]);
  }
  return result.join("");
};

let fields = [
  {
    name: "nameInput",
    input: nameInput,
    field: nameLabel,
    placeholder: "John Paul",
  },
  {
    name: "numberInput",
    input: numberInput,
    field: numberLabel,
    placeholder: "1234 5678 1234 5678",
  },
  {
    name: "date",
    input: dateInput,
    field: edateLabel,
    placeholder: "11/22",
  },
  {
    name: "cvv",
    input: cvvInput,
    field: cvvLabel,
    placeholder: "123",
  },
];

fields.forEach((input) => {
  input.input.addEventListener("keyup", (event) => {
    value = event.target.value;
    if (event.target.id === "cardnumber-input") {
      value = addSpaces(value);
    } else if (event.target.id === "cardname-input") value = addSlash(value);
    input.field.innerHTML = value;
  });
});

const ele = document.getElementById('display');
ele.addEventListener('click',() => {
  ele.classList.toggle('is-flipped');
})
const person = {
    name: {
      common: "John",
      fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: true,
    address: {
      street: "13/A St Joseph",
      house: 10,
    },
  };

const stringFieldJson = JSON.stringify(person);
// console.log(stringFieldJson);
const parsed = JSON.parse(stringFieldJson);
// console.log(parsed);

const {name, age, isMale, address} = parsed;
// console.log(name); 
const {common, fullName} = name;
console.log(common);
 const personContainer = document.getElementById('person-container');
personContainer.innerHTML = `
<h2>Common Name : ${common} </h2>
<h2>Full Name : ${fullName.join(" ")} </h2>
<p>Age : ${age}</p>
<p>Gender : ${isMale === true ? "Male" : "Female"}</p>
` 
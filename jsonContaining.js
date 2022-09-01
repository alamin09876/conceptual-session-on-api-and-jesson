const person = {
    found:2,
    message:"Found 2 persons",
    result:[
      {
          name: {
              common: "John",
              fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
              street: "13/A St Joseph",
              house: 10,
            },
      },
      {
          name: {
              common: "Humayoun",
              fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
              street: "13/A St Lucia",
              house: 11,
            },
      },
    ]
  };

const {found, message, result} = person;
// console.log(result);

document.getElementById("results-found").innerText = message;
result.forEach(singlePerson =>{
    const personCard = document.getElementById('card-container');
    const personDiv = document.createElement("div");
    personDiv.classList.add("col");
    personDiv.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Common Name : ${singlePerson.name.common}</h5>
        <p class="card-text">Age : ${singlePerson.age}</p>
        <p class="card-text">Address : ${singlePerson.address.street} ${singlePerson.address.house}</p>
        
      </div>
      </div>
    `
    personCard.appendChild(personDiv);
})
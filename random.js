const loadData = () =>{
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => displayUser(data.results[0]))

}
const displayUser = person =>{
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${person.picture.large}" class="w-100 rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name :${person.name.title} ${person.name.first} ${person.name.last}</h5>
        <p class="card-text">Loaction: ${person.location.street.number}, ${person.location.street.name}</p>
        <p class="card-text">Gender : ${person.gender}</p>
      </div>
    </div>
  </div>
</div>
    `
}

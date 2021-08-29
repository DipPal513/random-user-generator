const url = 'https://randomuser.me/api/'


fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))


const displayUser = (userData) =>{
    const container = document.getElementById('container');
    const div = document.createElement('div');
    const imagesrc = userData.results[0].picture.large
    const name = userData.results[0].name;
    const email = userData.results[0].email;
    const city = userData.results[0].location.city;
    const country = userData.results[0].location.country;
    const timezone = userData.results[0].location.timezone;
    console.log(userData.results[0])
    div.innerHTML =
    `
    <div class="card mx-auto" style="width: 25rem;">
    <img src="${imagesrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${name.title} ${name.first} ${name.last}</h5>
      <p class="card-text">Email: ${email} </p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">City: ${country}</li>
      <li class="list-group-item">City: ${city}</li>
      <li class="list-group-item">${timezone.description}</li>
    </ul>
  </div>
    `
    container.appendChild(div)
}
const refresh = () => {
  window.location.reload();
}
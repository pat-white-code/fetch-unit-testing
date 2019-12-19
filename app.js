let input = document.getElementById('input');

const thenBeer = () => {
  let id = input.value;
  fetch('https://api.punkapi.com/v2/beers/'+id)
    .then(res => res.json())
    .then(data => {
      displayBeer(data[0])
      console.log(data[0])
    }
      )
}

const asyncBeer = async() => {
  let id = input.value;
  let response = await fetch('https://api.punkapi.com/v2/beers/'+id);
  let results = await response.json();
  let beer = results[0];
  displayBeer(beer);
  console.log(beer)
}

const submit = document.getElementById('submit');
submit.addEventListener('click', asyncBeer)


const displayBeer = (beer) => {
  let imgContainer = document.getElementById('img-container');
  imgContainer.innerHTML = '';
  const name = document.getElementById('name')
  name.innerText = beer.name;
  const abv = document.getElementById('abv');
  abv.innerText = beer.abv;
  const desc = document.getElementById('desc');
  desc.innerText = beer.description;
  let img = document.createElement('img');
  img.src = beer.image_url;
  img.classList.add('beer-img')
  imgContainer.appendChild(img)
}
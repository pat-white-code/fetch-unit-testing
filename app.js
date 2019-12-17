const fetchBeer = () => {
  let input = document.getElementById('input');
  let id = input.value;
  fetch('https://api.punkapi.com/v2/beers/'+id)
    .then(res => res.json())
    .then(data => {
      displayBeer(data[0])
      console.log(data[0])
    }
      )
}

const submit = document.getElementById('submit');
submit.addEventListener('click', fetchBeer)


const displayBeer = (beer) => {
  const name = document.getElementById('name')
  name.innerText = beer.name;
  const abv = document.getElementById('abv');
  abv.innerText = beer.abv;
  const desc = document.getElementById('desc');
  desc.innerText = beer.description;
}
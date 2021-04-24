const searchForm = document.querySelector(".search");
const submitBtn = document.querySelector(".submit");
const results = document.querySelector(".results")

let name = document.querySelector("#pokeName");
let image = document.querySelector("#pokeBall");
let type = document.querySelector("#pokeType");
let hP = document.querySelector("#hpPoints");
let attack = document.querySelector("#attack");
let speed = document.querySelector("#speed");
let weight = document.querySelector("#weight");
let moves = document.querySelector("#moves")


//Backup fetch that works
// async function pokemonInfo() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
//     const data = await response.json();
//     console.log(data)

//     console.log(data)
// }
// pokemonInfo();

results.style.display = 'none';

submitBtn.addEventListener("click", e => {
    e.preventDefault();

    let id = document.querySelector(".search").value; 
    
    async function pokemonInfo(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log(data)

        pokeName.innerText = data.name;
        attack.innerText = data.stats[1].base_stat + " - Pts";
        hP.innerText = data.stats[0].base_stat + " - HP";
        weight.innerText = data.weight+" lbs";
        speed.innerText = data.stats[5].base_stat + " km/hr";
        image.src = data.sprites.front_default;
        type.innerText = data.types[0].type.name;
        type
    }

    pokemonInfo();
    results.style.display = "grid";
});
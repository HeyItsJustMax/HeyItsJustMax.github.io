//=================
//-----POKEDEX-----
//=================

// CONSTANTS - use $ to indicate you are using jquery


const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const $name = $("#name")
const $id = $("#index")
const $types = $("#types")
const $effectiveness = $("#effectiveness")
const $height = $("#height")
const $weight = $("#weight")
const $stats = $("#stats")
const $healthPoints = $("#hp")
const $attack = $("#attack")
const $defense = $("#defense")
const $specialAttack = $("#spclatk")
const $specialDefense = $("#spcldfs")
const $speed = $("#speed")
const $moves = $("#moves")
const $input = $('input[type="text"]')

const pokeTypes = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "fire", "water", "grass", "electric", "psychic", "ice", "dragon"]

// Event Listeners

$('form').on('submit', handleGetData)

// FUNCTIONS

function handleGetData(event) {
  event.preventDefault()

  $.ajax(BASE_URL + $input.val())
  .then(function(data) {
      console.log(data)
      render(data)

    }, function(error) {
      console.log('bad request', error)
    })
}

function render(pokeData) {

    $name.text(pokeData.name)
    $id.text(pokeData.id)
    if(pokeData.types.length > 1) {
      $types.text(pokeData.types[0].type.name + ", " + pokeData.types[1].type.name)
    } else {
      $types.text(pokeData.types[0].type.name)
    }
    $height.text(pokeData.height)
    $weight.text(pokeData.weight)
    
    $healthPoints.text(pokeData.stats[0].base_stat)
    $attack.text(pokeData.stats[1].base_stat)
    $defense.text(pokeData.stats[2].base_stat)
    $specialAttack.text(pokeData.stats[3].base_stat)
    $specialDefense.text(pokeData.stats[4].base_stat)
    $speed.text(pokeData.stats[5].base_stat)
    $moves.text(pokeData)
    

}



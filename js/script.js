//=================
//-----POKEDEX-----
//=================

// CONSTANTS - use $ to indicate you are using jquery

const $name = $("#name")
const $id = $("#index")
const $types = $("#types")
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

// Pokemon Name 1 - 151 (Bulbasaur - Mew)
$.ajax({
    url:'https://pokeapi.co/api/v2/pokemon?limit=151/'
  }).then(
    function(data){
     console.log(data);
    },
    function(error){
     console.log('bad request', error);
    }
  );


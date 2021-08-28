

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


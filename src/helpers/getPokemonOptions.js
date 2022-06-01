import pokemonApi from "@/api/pokemonApi"

//cremos el array
export const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650))
  return pokemonsArr.map(( _ , index ) => index + 1)
}

//function para obtener las 4 opciones de los pokemones
export const getPokemonOptions = async() => {
  //function para randomizar el array de los pokemon
  const mixedPokemons = getPokemons()
                          .sort( () => Math.random() - 0.5 )

  //pasamos mixedPokemons como parametro a getPokemones obteniendo solo los primeros 4
  const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )
  console.log(pokemons)
  console.log(typeof(pokemons[0].name))
  return pokemons
  
}

export const getPokemonNames = async ( [a,b,c,d] = [] ) => {
  //const resp = await pokemonApi.get(`/1`)
  //console.log(resp)
  const promisesArray = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`)
  ]
  const [p1, p2, p3, p4 ] = await Promise.all( promisesArray )
  return [
    {name: p1.data.name, id: p1.data.id},
    {name: p2.data.name, id: p2.data.id},
    {name: p3.data.name, id: p3.data.id},
    {name: p4.data.name, id: p4.data.id}
 ]
}

export default getPokemonOptions
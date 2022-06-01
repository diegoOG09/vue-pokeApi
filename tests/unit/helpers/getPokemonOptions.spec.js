import {getPokemonNames, getPokemons, getPokemonOptions} from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
  test('Debe regresar un array de numeros', () => {

    const pokemons = getPokemons()

    expect(Array.isArray(pokemons)).toBe(true)
    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)

  })
  test('Debe retornar un array de 4 elementos con nombres de pokemon', () => {
    const pokemonOptions = getPokemonOptions()

    expect(pokemonOptions && typeof pokemonOptions === 'object').toBe(true)
    
  })
  
  test('Retorna un objeto de 4 pokemons y su id', async () => {
    const pokemons = await getPokemonNames([1,2,3,4])
    console.log(pokemons)

    expect(pokemons && typeof pokemons === 'object').toBe(true)
    expect(pokemons[0].name === 'bulbasaur' && pokemons[0].id === 1).toBe(true)
    expect(pokemons[1].name === 'ivysaur' && pokemons[1].id === 2).toBe(true)
    expect(pokemons[2].name === 'venusaur' && pokemons[2].id === 3).toBe(true)
    expect(pokemons[3].name === 'charmander' && pokemons[3].id === 4).toBe(true)

    
  })
    
})
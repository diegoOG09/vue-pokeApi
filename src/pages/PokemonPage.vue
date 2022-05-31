<template>

  <h1 v-if="!pokemon">Wait a moment...</h1>
  
  <div v-else>
    <h1>Who is this Pokémon?</h1>
    <PokemonPicture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    />
    <PokemonOptions
      :pokemons="pokemonArr"
      @selection="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button id="newGameBtn" @click="newGame">
        New game
      </button>
    </template>
    
  </div>
  
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue"
import PokemonPicture from "@/components/PokemonPicture.vue"
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ''
      }
  },
  methods: {
    async mixPokemonArray() {
    this.pokemonArr = await getPokemonOptions()

    const rndInt = Math.floor( Math.random() * 4 )
    this.pokemon = this.pokemonArr[ rndInt ]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true
      if(selectedId === this.pokemon.id) {
        this.message = `Correct, ${this.pokemon.name}`
      }
      else {
        this.message = `Oops! the correct was ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.mixPokemonArray()
      this.pokemon = null
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>
  h1 {
    color: white;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  h2 {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  #newGameBtn {
    border: none;
    background-color: #D02D27;
    border-radius: 10px;
    padding: 1rem;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
</style>
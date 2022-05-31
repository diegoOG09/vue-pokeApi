<template>
  <div class="pokemon-container">
    <img v-if="!showPokemon" 
      class="hidden-pokemon"
      :src="imgSrc"
      alt="pokemon"
    >

    <img v-else
      class="showing-pokemon"
      :src="imgSrc"
      alt="pokemon"
    >
  </div>
  
</template>

<script>

export default {

  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}


</script>

<style scoped>
  .pokemon-container {
    margin: 0 auto;
    height: 200px;
    margin-bottom: 3rem;
  }
  img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
</style>
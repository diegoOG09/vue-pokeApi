<template>
  <PokemonPage />
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue'
export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: linear-gradient(90deg, rgba(248,204,70,1) 21%, rgba(63,104,172,1) 87%);
}
html {
  background: linear-gradient(90deg, rgba(248,204,70,1) 21%, rgba(63,104,172,1) 87%);
}
</style>

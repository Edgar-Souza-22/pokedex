<template>
  <v-container>
    <h2>{{pokemon.name}}</h2>
    <v-img :src='pokemon.sprites.other.dream_world.front_default'
      max-height="400"
      max-width="300"
      ></v-img>
  </v-container>
</template>

<script>

export default {
    /* eslint-disable */
    name: 'Details',
    data: () => ({
      pokemon: {}
    }),

    methods: {
      async getPokemonDetails(){
        let response = await this.$http.get(this.$route.path)
        console.log(response)
        this.pokemon = response.data
      }
     
    },

    async mounted() {
      await this.getPokemonDetails()

    }

}
</script>

<style>

</style>
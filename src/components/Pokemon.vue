<template>
  <v-container>
    <v-row class="mb-10">
      <v-col v-for="item in pokemonList" :key=item.name cols='3'>
        <v-card @click="pokemonDetails(item)">
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-text >
            <v-img
              :src='getImg(item)'
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center mb-10">
       <v-btn @click="getPokemon()"
        class="mr-auto"
        rounded
        color="primary"
        dark
      >
        Primeira Página
      </v-btn>
      <v-btn @click="getPokemon(previousPage)"
        
        class="mr-5"
        rounded
        color="primary"
        dark
      >
        Página Anterior
      </v-btn>
      <v-btn @click="getPokemon(nextPage)"
        rounded
        color="primary"
        dark
      >
        Próxima Página
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PokeMon',

    data: () => ({
      pokemonList: [],
      nextPage: "",
      previousPage:""
    }),

    methods: {
      async getPokemon(page){
        if(!page) page = ""
        let response = await this.$http.get(`/pokemon${page}`)
        this.pokemonList = response.data.results
        if(response.data.next){
          this.nextPage = `?${(response.data.next).split('?')[1]}`
        }
        if(response.data.previous){
          this.previousPage = `?${(response.data.previous).split('?')[1]}`
        }
      },

      getCode(item){
        let code = item.url.replace(/.*\/(\d+)\/?$/i, '$1')
        return code
      },

      getImg(item){
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getCode(item)}.png`
        return imgSrc
      },

      pokemonDetails(data){
        
        this.$router.push(`/pokemon/${this.getCode(data)}`)
      }
    },

    async mounted() {
      await this.getPokemon()

    }
  }
 
</script>

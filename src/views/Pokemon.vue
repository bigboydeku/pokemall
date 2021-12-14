<template>
  <main class="flex-1 flex overflow-hidden">
      <section class="min-w-0 flex-1 h-full flex flex-col">
          <h1 class="">User</h1>
      </section>

      <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first overflow-y-hidden">
          <div class="h-full relative flex flex-col w-96 border-r border-gray-200 overflow-y-auto">
              <div class="">
                    <div class="min-w-0 h-16 w-full flex-1">
                        <div class="max-w-2xl h-full relative text-gray-400 focus-within:text-gray-500">
                            <label for="desktop-search" class="sr-only">Search Pokemon</label>
                            <input id="desktop-search" v-model="text" type="search" placeholder="Search Pokemon" class="block w-full h-full  pl-12 placeholder-gray-500 sm:text-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                                <!-- Heroicon name: solid/search -->
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
              <div class="flex flex-col space-y-4 px-8 py-6 h-auto bg-white border-b border-gray-200">
                <div class="flex flex-row  space-x-4">
                    <h1>Pokemon List</h1>
                    <h2 class="text-xs m-1">{{number_of_results}} Results</h2>
                </div>
              </div>

              <div class="border-b bg-gray-100 px-8 py-2">
                <h2 class="h-full text-xs text-gray-500 font-bold flex items-center">Sorted by ID</h2>
              </div>

              <div class="px-4 py-2 overflow-auto ">
                  <div class="rounded-md border border-gray-300 bg-white">
                        <div class="hover:bg-red-100 border-b w-full py-1" v-for="(pokemon, index) in filteredPokemon" :key="index">
                        <router-link class="px-4" :to="`/pokemon/${urlIdLookup[pokemon.name]}`"> 
                            <span class="font-bold text-red-500">{{urlIdLookup[pokemon.name]}}</span>
                            {{pokemon.name}}
                        </router-link>
                    </div>
                  </div>
              </div>
          </div>
      </aside>
  </main>
</template>

<script>
import {reactive, toRefs, computed} from 'vue'
export default {
    data() {
        const state = reactive({
            pokemons: [],
            urlIdLookup: {},
            text: "g",
            filteredPokemon: computed(() => updatePokemon()),
            number_of_results: 0
        })

        function updatePokemon() {
            let arr = state.pokemons.filter((pokemon) => pokemon.name.includes(state.text))
            state.number_of_results = arr.length
            return arr
        }

        fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then((res) => res.json())
        .then((data) => {
            state.pokemons = data.results
            state.urlIdLookup = data.results.reduce((acc,cur,idx) => acc = {...acc,[cur.name]:idx+1}, {})
            state.number_of_results = state.filteredPokemon.length
            return data
        }).then((data) => {
            state.filteredPokemon = data.results
        })
        return {...toRefs(state)}
    }
}
</script>

<style>
*:focus {
    outline: none;
}

#desktop-search::-webkit-search-cancel-button{
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    margin-left: .4em;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    cursor: pointer;
}
</style>
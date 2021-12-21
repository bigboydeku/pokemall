<template>
  <main class="flex-1 flex overflow-hidden">
    <section class="min-w-0 flex-1 flex flex-col bg-gray-50">
        <div v-if="!pokemon" class="flex flex-col h-full">
            <div class="w-full py-4 bg-primary h-24">
                <div class="mt-4 flex-shrink-0 flex flex-col space-y-2 md:mt-0 mx-auto">
                    <nav class="flex ml-8" aria-label="Breadcrumb">
                        <ol role="list" class="flex items-center space-x-4">
                            <li>
                            <div>
                                <router-link to="/" class="text-gray-200 hover:text-white">
                                <svg class="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                <span class="sr-only">Home</span>
                                </router-link>
                            </div>
                            </li>

                            <li>
                            <div class="flex items-center">
                                <svg class="flex-shrink-0 h-4 w-4 text-gray-200 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                                <router-link :to="`/pokemon`" class="ml-4 text-sm font-medium text-gray-200 hover:text-white">Pokemon</router-link>
                            </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            
            <div class="flex justify-center bg-gray flex-col items-center flex-1">
                <img src="https://1.bp.blogspot.com/-YpxcVeA_Pl8/XTPoZK6E30I/AAAAAAABTyc/nRquAxOYXWIvDob9YHwsg0rCZzxFdeASQCLcBGAs/s400/kouji_yane_syuuri.png" alt="" class="w-2/12">
                <h1 class="text-gray-600">Click on one of the pokemon on the left</h1>
            </div>
        </div>
        <div v-else class="flex bg-gray overflow-y-auto">
            <div class=" ">
                <div class="border-b py-4 bg-primary">
                    <div class=" mt-4 flex-shrink-0 flex flex-col space-y-2 md:mt-0 mx-auto">
                        <nav class="flex ml-8" aria-label="Breadcrumb">
                            <ol role="list" class="flex items-center space-x-4">
                                <li>
                                <div>
                                    <router-link to="/" class="text-gray-200 hover:text-white">
                                    <svg class="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <span class="sr-only">Home</span>
                                    </router-link>
                                </div>
                                </li>

                                <li>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-4 w-4 text-gray-200 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <router-link :to="`/pokemon`" @click="updateChosenPokemon(null)" class="ml-4 text-sm font-medium text-gray-200 hover:text-white">Pokemon</router-link>
                                </div>
                                </li>

                                <li>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-4 w-4 text-gray-200 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <router-link :to="`/pokemon/${urlIdLookup[pokemon.name]}`" class="ml-4 text-sm font-medium text-gray-200 hover:text-white" aria-current="page">{{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}}</router-link>
                                </div>
                                </li>
                            </ol>
                        </nav>
                        <div class="flex-1 min-w-0 ml-8">
                            <div class="flex flex-row items-center">
                                <h2 class="text-2xl font-bold leading-7 text-gray-200 hover:text-white sm:text-3xl sm:truncate">{{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}}</h2>
                                <h2 class="text-md text-gray-200 ml-1 hover:text-white sm:text-xl sm:truncate">#{{urlIdLookup[pokemon.name]}}</h2>
                                <div v-for="type in pokemon.types" :key="type.slot" :class="`inline-flex ml-2 items-center px-2 py-2 bg-type-${type.type.name} text-type-${type.type.name}-text rounded-xl h-5 text-xs font-medium bg-gray-100 text-gray-800`">{{type.type.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-row">
                    <div class="h-screen flex justify-center w-10/12">
                        <div class="grid grid-cols-3 gap-2 w-full px-8 py-8">
                            <!-- General Information -->
                            <div class="bg-white border-2 border-gray-300 p-3 rounded row-span-2 col-span-2">
                                <div class="flex flex-row">
                                    <h2 class="text-xl text-gray-700 leading-7 font-bold">{{pokemon.name}}</h2>
                                    <div v-for="type in pokemon.types" :key="type.slot" :class="`inline-flex ml-2  items-center px-2 py-2 bg-type-${type.type.name} text-type-${type.type.name}-text rounded-xl h-5 text-xs font-sm text-gray-800`">{{type.type.name}}</div>
                                </div>
                                <h2 class="text-sm text-gray-600"><span class="font-bold">{{pokemon_species.name}}</span>
                                    (<span class="font-bold italic">日本語/Japanese:</span> {{pokemon_species.languages["roomaji"]}} {{pokemon_species.languages["ja-Hrkt"]}},
                                    <span class="font-bold italic">Français/French:</span> {{pokemon_species.languages["fr"]}},
                                    <span class="font-bold italic">German/Deutsch:</span> {{pokemon_species.languages["de"]}})
                                    <span class="font-bold italic">Italian/Italiano:</span> {{pokemon_species.languages["it"]}})
                                    <span class="font-bold italic">Chinese/中文:</span> {{pokemon_species.languages["zh-Hans"]}})
                                    is a {{pokemon.types.length > 1? 'dual': pokemon.types[0].type.name}}-type pokemon introduced in <span class="font-semibold">{{pokemon_species.generation.name.replace("-", " ")}}</span>.
                                </h2>
                            </div>
                            <div class="bg-white p-3 rounded row-span-2"></div>
                            <div class="bg-white p-3 rounded col-span-3"></div>
                            <div class="bg-white p-3 rounded">4</div>
                            <div class="bg-white p-3 rounded">5</div>
                            <div class="bg-white p-3 rounded">6</div>
                            <div class="bg-white p-3 rounded">7</div>
                            <div class="bg-white p-3 rounded">8</div>
                            <div class="bg-white p-3 rounded">9</div>
                        </div>
                    </div>
                    <!-- For advertisements -->
                    <div class="flex flex-col mt-8 w-2/12">
                        <div><img src="https://lineardesign.com/wp-content/uploads/2019/12/PayPal-Display-Ad-Example-160-X-600-1.jpg" alt="" class="basis-96"></div>
                        <div><img src="https://lineardesign.com/wp-content/uploads/2019/12/Purple-Display-Ad-Example-160-X-600-1.jpg" alt="" class="basis-96"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first overflow-y-hidden">
        <div class="h-full relative flex flex-col w-72 border-r border-gray-200 overflow-y-auto">
            <div class="">
                <div class="min-w-0 h-16 w-full flex-1">
                    <div class="max-w-2xl h-full relative text-gray-400 border-b focus-within:text-gray-500">
                        <label for="desktop-search" class="sr-only">Search Pokemon</label>
                        <input id="desktop-search" v-model="text" type="search" placeholder="Search Pokemon" class="block w-full h-full  pl-12 placeholder-gray-500 sm:text-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4 px-8 py-6 h-auto bg-white border-b border-gray-200">
            <div class="flex flex-row  space-x-4">
                <h1 class="font-bold">Pokemon List</h1>
                <h2 class="text-xs m-1">{{number_of_results}} Results</h2>
            </div>
            </div>

            <div class="border-b bg-gray px-8 py-2">
            <h2 class="h-full text-xs text-gray-500 font-bold flex items-center">Sorted by ID</h2>
            </div>

            <div class="pb-2 overflow-auto ">
                <div class="bg-white">
                    <div class="hover:bg-gray-100 border-b w-full py-1" v-for="(pokemon, index) in filteredPokemon" :key="index">
                    <router-link class="px-8 cursor-pointer block w-full h-full" @click="updateChosenPokemon(urlIdLookup[pokemon.name])" :to="`/pokemon/${urlIdLookup[pokemon.name]}`"> 
                        <span class="font-bold text-secondary">{{urlIdLookup[pokemon.name]}}</span>
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
            pokemon: null,
            pokemon_species: {},
            pokemons: [],
            urlIdLookup: {},
            text: "",
            filteredPokemon: computed(() => updatePokemon()),
            number_of_results: 0,
            
        })

        function updatePokemon() {
            // if (!this.$route.params.slug) arr = []
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
    }, methods: {
        // refactor into promise-based
        updateChosenPokemon(slug) {
            if (!slug) return this.pokemon = null
            fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
            .then(res => res.json())
            .then((data) => {
                this.pokemon = data
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${slug}/`)
                .then(res_2 => res_2.json())
                .then(data_species => {
                    this.pokemon_species = data_species
                    var languages = {};
                    let arr = this.pokemon_species.names
                    for (var i = 0; i < arr.length; i++) {
                        languages[arr[i].language.name] = arr[i].name
                    }
                    this.pokemon_species["languages"] = languages
                })
            })
        },
    },
    beforeMount() {
        if (this.$route.matched[0].name !== 'pokemon') return
        if (this.$route.params.slug) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.slug}`)
            .then(res => res.json())
            .then((data) => {
                this.pokemon = data
            })
        }
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
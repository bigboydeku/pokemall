<template>
  <main class="flex-1 flex overflow-hidden">
    <section class="min-w-0 flex-1 flex flex-col bg-gray-50">
        <div v-if="!showList" class="bg-primary md:pt-2 flextext-white cursor-pointer" @click="toggleListView()">
            
            <div class="flex space-x-2 text-white px-4 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                </svg>
                <h1>Show List</h1>
            </div>
        </div>

        <div v-else class="bg-primary md:pt-2 flex text-white cursor-pointer" @click="toggleListView()">
            <div class=" flex space-x-2 text-white px-4 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <h2>Hide List</h2>
            </div>
            
        </div>

        <div v-if="!pokemon" class="flex flex-col h-full" @click="toggleListView(false)">
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
        <div v-else class="flex flex-col bg-gray overflow-y-auto" @click="toggleListView(false)">
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
                
                <div class="flex flex-row justify-center md:max-w-screen-xl max-w-full mx-auto">
                    <div class="h-screen flex justify-center w-full md:w-10/12">
                        <div class="grid grid-cols-3 gap-2 w-full md:px-8 px-1 py-8">
                            <!-- General Information -->
                            <div class="bg-white border-2 border-gray-300 p-3 rounded col-span-3 md:col-span-2 flex flex-col">
                                <!-- Main Name -->
                                <div class="flex flex-row">
                                    <h2 class="text-xl text-gray-700 leading-7 font-bold"> {{pokemon_species.languages["en"]}} </h2>
                                    <div v-for="type in pokemon.types" :key="type.slot" :class="`inline-flex ml-2  items-center px-2 py-2 bg-type-${type.type.name} text-type-${type.type.name}-text rounded-xl h-5 text-xs font-sm text-gray-800`">{{type.type.name}}</div>
                                </div>
                                <!-- Languages -->
                                <h2 class="leading-2 text-sm">
                                    <span class="italic text-gray-500"> (日本語/Japanese: {{pokemon_species.languages["roomaji"]}} {{pokemon_species.languages["ja-Hrkt"]}}, </span>
                                    <span class="italic text-gray-500">Français/French: {{pokemon_species.languages["fr"]}}, </span>
                                    <span class="italic text-gray-500">German/Deutsch: {{pokemon_species.languages["de"]}}, </span>
                                    <span class="italic text-gray-500">Italian/Italiano: {{pokemon_species.languages["it"]}}, </span>
                                    <span class="italic text-gray-500">Chinese/中文: {{pokemon_species.languages["zh-Hans"]}} )</span>
                                    
                                </h2>
                                <!-- Introduction -->
                                <span class="text-black mt-3"> 
                                       {{pokemon_species.languages["en"]}} is a {{pokemon.types.length > 1? 'dual': pokemon.types[0].type.name}}-type pokemon introduced in <span class="font-semibold">{{pokemon_species.generation.name.replace("-", " ")}}.</span>
                                </span>
                                <!-- Evolution chain -->
                                <div class="w-full">
                                    <div v-for="(evolution) in pokemon_evolution_chain" :key="evolution" class="inline">
                                        <div v-if="evolution.evolves_to[0]" class="float-left">
                                            <router-link class="cursor-pointer text-blue-500 hover:underline" @click="updateChosenPokemon(urlIdLookup[evolution.species.name])" :to="`/pokemon/${urlIdLookup[evolution.species.name]}`">{{evolution.species.name[0].toUpperCase() + evolution.species.name.substring(1)}}</router-link> 
                                            evolves into 
                                            <router-link class="cursor-pointer text-blue-500 hover:underline" @click="updateChosenPokemon(urlIdLookup[evolution.evolves_to[0].species.name])" :to="`/pokemon/${urlIdLookup[evolution.evolves_to[0].species.name]}`"> {{evolution.evolves_to[0].species.name[0].toUpperCase() + evolution.evolves_to[0].species.name.substring(1)}}</router-link>
                                            at level 
                                            <span class="font-semibold">{{evolution.evolves_to[0].evolution_details[0].min_level}}.&nbsp;</span>
                                        </div>
                                        <div v-if="!evolution.evolves_to[0]">
                                            <router-link class="cursor-pointer text-blue-500 hover:underline" @click="updateChosenPokemon(urlIdLookup[evolution.species.name])" :to="`/pokemon/${urlIdLookup[evolution.species.name]}`">
                                                {{evolution.species.name[0].toUpperCase() + evolution.species.name.substring(1)}}
                                            </router-link> is the final form in its evolution chain.
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <!-- Images -->
                            <div class="bg-white border-2 border-gray-300 p-3 rounded col-span-3 md:col-span-1 flex flex-col">
                                <div class="flex ml-4">
                                    <h2 class="text-2xl font-bold leading-7 text-gray-800 hover:text-white sm:text-3xl sm:truncate">{{pokemon_species.languages["en"]}}</h2>
                                    <h2 class="text-md text-gray-800 ml-1 sm:text-xl sm:truncate">#{{pokemon.name}}</h2>
                                </div>
                                {{pokemon.sprites['ultra-sun-ultra-moon']}}
                                <div class="mx-auto align-middle p-12 "><img :src="pokemon.sprites.other['official-artwork']['front_default']" alt=""></div>

                            </div>
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
                    <!-- <div class="flex flex-col mt-8 w-2/12">
                        <div><img src="https://lineardesign.com/wp-content/uploads/2019/12/PayPal-Display-Ad-Example-160-X-600-1.jpg" alt="" class="basis-96"></div>
                        <div><img src="https://lineardesign.com/wp-content/uploads/2019/12/Purple-Display-Ad-Example-160-X-600-1.jpg" alt="" class="basis-96"></div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>

    <aside v-if="showList" class=" md:relative md:block lg:flex-shrink-0 order-first max-h-screen absolute p-0 ">
        <div class="h-full relative  md:w-72 xs:w-48 border-r border-gray-200 overflow-y-auto">
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

            <div class="pb-2 max-h-screen">
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
            pokemon: null,                                  //selected pokemon
            pokemon_species: {},                            //selected pokemon species
            pokemon_evolution_chain: null,                  //selected pokemon evolution chain
            pokemons: [],                                   //list of all pokemon
            urlIdLookup: {},                                //id look ups
            text: "",
            filteredPokemon: computed(() => updatePokemon()),
            number_of_results: 0,
            showList: false
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
        toggleListView(flag) {
            if (flag == null)
                this.showList = !this.showList
            else if (flag && window.innerWidth < 768)
                this.showList = true
            else if (!flag && window.innerWidth < 768)
                this.showList = false
        },
        // refactor into promise-based
        updateChosenPokemon(slug) {
            if (!slug) return this.pokemon = null
            this.fetchPokemonData(slug)
        },
        formatForeignNames(names) {
            var languages = {};
            let arr = names
            for (var i = 0; i < arr.length; i++) {
                languages[arr[i].language.name] = arr[i].name
            }
            return languages
        },
        formatEvolutionChain(evolution_chain) {
            let chain = [], temp = evolution_chain
            chain.push(evolution_chain)
            while(temp.evolves_to[0]) {
                if (temp.evolves_to) {
                    temp = temp.evolves_to[0]
                    chain.push(temp)
                }
            }
            return chain
        },
        fetchPokemonData(id) {
            Promise.all([
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.ok && res.json() || Promise.reject(res)),
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.ok && res.json() || Promise.reject(res)),
            ]).then(data => {
                this.pokemon = data[0]
                this.pokemon_species = data[1]
                this.pokemon_species["languages"] = this.formatForeignNames(this.pokemon_species.names)
                Promise.all([fetch(this.pokemon_species.evolution_chain.url).then(res => res.ok && res.json() || Promise.reject(res))]).then(data => {
                    this.pokemon_evolution_chain = this.formatEvolutionChain(data[0].chain)
                    // this.pokemon.sprites = this.collectPokemonImages(this.pokemon.sprites)
                })
                
            })
        },
        collectPokemonImages() {
            // let obj = sprites.versions
            // console.log(sprites)
            // let size = Object.keys(obj).length
            // console.log(Object.keys(obj['generation-i']))
            //recursion later
            // if (Object.keys(obj[size-1]).length <= 1) size--
            // return obj[size]
        }
    },
    beforeMount() {
        if (this.$route.matched[0].name !== 'pokemon') return
        if (this.$route.params.slug) this.fetchPokemonData(this.$route.params.slug)
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

.view-list {
    fill: white;
}
</style>
<template>
  <div class="bg-primary md:w-48 w-full">
    <div class="flex-1 md:flex hidden md:flex-col flex-row md:pt-5 md:pb-4 overflow-y-auto ">
      <div class="flex items-center flex-shrink-0 px-4">
        <img class="h-18 m-auto" src="@/assets/pokemon_logo.png" alt="Pokemon" />
      </div>
      <nav id="nav" class="mt-5 flex-1 px-2 bg-primary space-y-1" aria-label="Sidebar">
        <router-link v-for="item in navigation" :key="item.name" :href="item.href" class-active="active" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
          <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
          <span class="flex-1">
            {{ item.name }}
          </span>
          <span v-if="item.count" :class="[item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
            {{ item.count }}
          </span>
        </router-link>
      </nav>
    </div>
    

    <nav class="bg-white shadow md:hidden block">
      <div class="mx-auto">
          <div class="md:flex justify-between items-center">
              <!-- left section -->
              <div class="flex justify-between items-center px-4 py-2 bg-primary">
                  <div class="flex items-center flex-shrink-0 px-4">
                <img class="h-8 m-auto" src="@/assets/pokemon_logo.png" alt="Pokemon" />
              </div>
                  <div class="md:hidden" >
                      <button id="nav-button" @click="toggleNav()" type="button" class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none">
                          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                          </svg>  
                      </button>
                  </div>
              </div>
              <!-- right section -->
              <nav id="nav" v-if="showMenu" class="flex-1 px-2 bg-primary space-y-1 fixed w-full py-2" aria-label="Sidebar">
                <router-link v-for="item in navigation" :key="item.name" :href="item.href" class-active="active" :to="item.href" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-4 text-sm font-medium rounded-md">
                  <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                  <span class="flex-1">
                    {{ item.name }}
                  </span>
                  <span v-if="item.count" :class="[item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
                    {{ item.count }}
                  </span>
                </router-link>
              </nav>
          </div>
      </div>
    </nav>

  </div>
</template>

<script>
  const navigation = [
    { name: 'Home', icon: null, href: '/'},
    { name: 'Pokemon', icon: null, href: '/pokemon'},
    { name: 'Items', icon: null, href: '/items'},
    { name: 'Moves', icon: null, href: '/moves'},
    ]
    const secondaryNavigation = [
    { name: 'Website redesign', href: '#' },
    { name: 'GraphQL API', href: '#' },
    { name: 'Customer migration guides', href: '#' },
    { name: 'Profit sharing program', href: '#' },
  ]
    
  import {reactive, toRefs} from 'vue'
    
  export default {
    data() {
      const state = reactive({
        navigation,
        secondaryNavigation,
        showMenu: false
      })
      return {...toRefs(state)}
    },
    methods: {
      toggleNav() {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>

<style>
  #nav a.router-link-active {
    background-color: rgb(229, 56, 59);;
  }
</style>
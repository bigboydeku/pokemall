<template>
  <div class="bg-primary w-48">
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
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

export default {
    setup() {
        return {
            navigation,
            secondaryNavigation
        }
    }
}
</script>

<style>
  #nav a.router-link-active {
    background-color: rgb(229, 56, 59);;
  }
</style>
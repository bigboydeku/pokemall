<template>
  <div class="flex flex-row max-w-xs h-full">
    <NavBar></NavBar>
    <div class="bg-white">Dashboard</div>
  </div>
</template>

<script>

import NavBar from "./components/NavBar";

const navigation = [
  { name: 'Dashboard', icon: null, href: '#', current: true },
  { name: 'Team', icon: null, href: '#', current: false },
  { name: 'Projects', icon: null, href: '#', current: false },
  { name: 'Calendar', icon: null, href: '#', current: false },
  { name: 'Documents', icon: null, href: '#', current: false },
  { name: 'Reports', icon: null, href: '#', current: false },
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
      secondaryNavigation,
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
  #app {
    height: 100vh;
  }
</style>
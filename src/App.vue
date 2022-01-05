<template>
  <div class="flex md:flex-row h-full flex-col">
      <NavBar class="z-50"></NavBar>
      <router-view/>
  </div>
  
</template>

<script>

import NavBar from "./components/NavBar";

export default {
  setup() {
    return {
    }
  },
  components: {
    NavBar,
  }
}
</script>










<style>
  #app {
    height: 100vh;
  }

  body {
    display:block;
    min-width: fit-content;
    overflow: auto;
    height:100vh;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background-color: rgb(243, 244, 246);
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgb(168, 168, 168);
    border-radius: 20px;

  }


</style>
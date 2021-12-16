<template>
  <div class="flex flex-row h-full">
      <NavBar></NavBar>
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
  }

  *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background-color: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgb(148, 148, 148);
    border-radius: 20px;

  }


</style>
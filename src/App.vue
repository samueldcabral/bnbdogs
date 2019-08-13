<template>
  <div id="app">
    <navBar class="pl-5 ml-5"/>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar";

export default {
    name: "show-dogs",
    components: { NavBar },
}
</script>
<style>
</style>

<template>
  <div>
    <navBar />
    <div class="container">
      <RegBox />
    </div>
  </div>
</template>


<script>
import NavBar from "../components/NavBar";
import RegBox from "../components/RegistryBox";

export default {
  name: "registry",
  components: { NavBar, RegBox }
};
</script>

<style>
body {
  background: url("../../static/happydog.jpg") no-repeat !important;
  background-size: cover !important;
  overflow: hidden;
}
</style>
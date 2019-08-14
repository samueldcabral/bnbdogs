<template>
  <div>
    <div class="container">
      <home-box class="homeBox" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBox from "../components/HomeBox";

export default {
  name: "home",
  components: { HomeBox }
};
</script>

<style>
body {
  background: url("../../static/happy-doggo2.jpg") no-repeat !important;
  /* background: url("../../static/happydog.jpg") no-repeat !important; */
  background-size: cover !important;
  overflow: hidden;
}
.homeBox {
  position: absolute;
  bottom: 40%;
  left: 5%;
}
</style>
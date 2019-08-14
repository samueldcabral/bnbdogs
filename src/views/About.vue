<template>
  <div>
    <b-container class="bg-white m-auto text-center" style="min-height: 500px;">
      <sidebar />
      <h3 class="m-5">This is an about page</h3>
    </b-container>
  </div>
</template>

<script>
import sidebar from "../components/Sidebar";

export default {
  name: "about",
  components: { sidebar }
};
</script>

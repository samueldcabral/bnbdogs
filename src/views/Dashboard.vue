<template>
  <div>
    <navBar class="pl-5 ml-5"/>
    <b-container>
      <sidebar />
      <h1 class="mt-5">Welcome, {{ name }}</h1>
      <div>
        <div class="mt-3">
          <b-card-group deck>
            <b-card border-variant="dark" header="Users" align="center">
              <b-card-text>{{ users }}</b-card-text>
            </b-card>
            <b-card border-variant="dark" header="Dogs" align="center">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import sidebar from "../components/Sidebar";
import { getUsers } from '../services/services';


export default {
  name: "dashboard",
  components: { NavBar, sidebar },
  data () {
    return {
      users: []
    }
  },
  mounted () {
    getUsers().then(res => {
      this.users = res
    });
  }
};


</script>
<style>
body {
  background-color: #fff !important;
}
</style>
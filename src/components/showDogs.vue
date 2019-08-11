<template>
  <div>
    <navBar class="pl-5 ml-5"/>
    <b-container>
      <sidebar />
      <div class="mt-5">
        <h2 class="m-5">List of dogs</h2>
        <b-table class="mt-5" striped hover :items="items" :fields="fields"></b-table>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import sidebar from "../components/Sidebar";
import { showDogsUser } from '../services/services';

  export default {
    name: "show-dogs",
    components: { NavBar, sidebar },
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'name',
            sortable: true
          },
          {
            key: 'age',
            label: 'Dog age',
            sortable: false
          },
          {
            key: 'weight',
            label: 'Dog weight',
            sortable: true,
          },
          {
            key: 'breed',
            label: 'Dog breed',
            sortable: true,
          }
        ],
        dogs: []
      }
    }, 
    mounted () {
      this.showDogs(2)
    }, 
    methods: {
      showDogs(userId) {
        showDogsUser(userId)
      }
    }
  }
</script>
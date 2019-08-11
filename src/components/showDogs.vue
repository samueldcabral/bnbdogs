<template>
  <div>
    <navBar class="pl-5 ml-5"/>
    <b-container class="bg-white">
      <sidebar />
      <div class="mt-5 p-2" >
        <h2 class="m-5">List of dogs</h2>


        <div class="table table-borderless" id="table">
          <table class="table table-borderless" id="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Weight</th>
                      <th>Breed</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tr v-for="dog in dogs">
                  <td>{{ dog.id }}</td>
                  <td>{{ dog.name }}</td>
                  <td>{{ dog.age }}</td>
                  <td>{{ dog.weight }}</td>
                  <td>{{ dog.breed }}</td>
                  
                  <td id="show-modal" @click="showModal=true; setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)"  class="btn btn-info" ><i class="fas fa-pencil-alt"></i></td>
                  <td @click.prevent="deletedog(dog)" class="btn btn-danger"><i class="fas fa-trash"></i></td>
              </tr>
          </table>
      </div>


<!--         <b-table class="mt-5" striped hover :items="dogs" :fields="fields"></b-table> -->      
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
          },
          {
            key: 'edit',
            label: 'Edit dog',
            sortable: true,
          },
          {
            key: 'delete',
            label: 'delete dog',
            sortable: true,
          }
        ],
        items: [
          {edit: "<i class='fas fa-home'></i>"},
          {delete: "<i class='fas fa-home'></i>"}
        ],
        dogs: []
      }
    }, 
    mounted () {
      this.showDogs(2).then(res => {
        this.dogs = res
      });

      /* this.dogs.map(dog => {
        this.items.push({
          name: dog.name, age: dog.age, weight: dog.weight, breed: dog.breed
        })
      }) */
    }, 
    methods: {
      showDogs(userId) {
        this.dogs = showDogsUser(userId).then(res => res.data)
        return this.dogs
      }
    }
  }
</script>
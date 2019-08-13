<template>
  <div>
    <b-container class="bg-white">
      <sidebar />
      <div class="mt-5 p-2" >
        <div class="row">
          <div class="col-6">
            <h2 class="m-5">List of dogs</h2>
          </div>
          <div class="col-6">
            <b-button class="m-5" to="add-dog" variant="success">Add a Dog</b-button>
          </div>
        </div>
        

        <div class="table" id="table">
          <table class="text-center table table-striped" id="table">
              <thead class="thead-dark">
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Weight</th>
                      <th>Breed</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tr v-for="dog in dogs" v-bind:key="dog.id">
                  <td>{{ dog.id }}</td>
                  <td>{{ dog.name }}</td>
                  <td>{{ dog.age }}</td>
                  <td>{{ dog.weight }} kg</td>
                  <td>{{ dog.breed }}</td>
                  
                  <!-- <td id="show-modal" @click="showModal=true; setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)" class="btn btn-info m-1" ><i class="fas fa-pencil-alt"></i></td> -->
                  <td @click.prevent="deleteItem(dog.id)" class="btn btn-danger m-1"><i class="fas fa-trash"></i></td>
              </tr>
          </table>
      </div>
      </div>
    </b-container>

 <!--    <modal v-if="showModal" @close="showModal=false">
      <h3 slot="header">Edit dog</h3>
      <div slot="body">
          
          <input type="hidden" disabled class="form-control" id="e_id" name="id"
                  required  :value="this.e_id">
          Name: <input type="text" class="form-control" id="e_name" name="name"
                  required  :value="this.e_name">
          Age: <input type="number" class="form-control" id="e_age" name="age"
          required  :value="this.e_age">
          Weight: <input type="text" class="form-control" id="e_weight" name="weight"
          required  :value="this.e_weight">
          Breed: <input type="text" class="form-control" id="e_breed" name="breed"
          required  :value="this.e_breed">
          
        
      </div>
      <div slot="footer">
          <button class="btn btn-default" @click="showModal = false">
          Cancel
        </button>
        
        <button class="btn btn-info" @click="editItem()">
          Update
        </button>
      </div>
    </modal> -->
  </div> 
</template>

<script>
import sidebar from "../components/Sidebar";
import { showDogsUser, deleteDog, editDog } from '../services/services';

export default {
    name: "show-dogs",
    components: { sidebar },
    data() {
      return {
        dogs: []
      }
    }, 
    mounted () {
      this.showDogs(2).then(res => {
        this.dogs = res
      });
    }, 
    methods: {
      showDogs(userId) {
        this.dogs = showDogsUser(userId).then(res => res.data)
        return this.dogs
      },
      deleteItem(dogId) {
        deleteDog(dogId)
        this.$router.push("/show-dogs")

      },
      setVal(val_id, val_name, val_age, val_weight, val_breed) {
        this.e_id = val_id;
        this.e_name = val_name;
        this.e_age = val_age;
        this.e_weight = val_weight;
        this.e_breed = val_breed;
      },
      editItem() {
        let dog = {
          id: document.getElementById('e_id'),
          name: document.getElementById('e_name'),
          age: document.getElementById('e_age'),
          weight: document.getElementById('e_weight'),
          breed: document.getElementById('e_breed'),
          user_id: 2
        }

        editDog(dog).then(res => {
          this.showModal=false
          return res
        })
      }
    }
  }
</script>
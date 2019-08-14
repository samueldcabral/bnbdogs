<template>
  <div>
    <b-container class="bg-white">
      <sidebar />
      <div class="mt-5 p-2">
        <div class="row">
          <div class="col-6">
            <h2 class="m-5">List of dogs</h2>
          </div>
          <div class="col-6">
            <!-- <b-button class="m-5" to="add-dog" variant="success">Add a Dog</b-button> -->
            <b-button
              class="m-5"
              variant="success"
              @click="$bvModal.show('modal-create'); setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)"
            >Add a dog</b-button>
          </div>
        </div>

        <b-alert v-if="alertMessage" :variant="alertType" show>{{alertMessage}}</b-alert>
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
              <td>
                <b-button
                  @click="$bvModal.show('modal-scoped'); setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)"
                >
                  <i class="fas fa-pencil-alt"></i>
                </b-button>
                <!--   <b-button @click="showModal=true; setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)" class="btn-info m-1"><i class="fas fa-pencil-alt"></i></b-button> -->
                <b-button @click="showMsgBoxOne(dog)" class="btn-danger m-1">
                  <i class="fas fa-trash"></i>
                </b-button>
              </td>
              <!-- <td id="show-modal" @click="showModal=true; setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)" class="btn btn-info m-1" ><i class="fas fa-pencil-alt"></i></td> -->

              <!--  <td @click.prevent="deleteItem(dog.id)" class="btn btn-danger m-1"><i class="fas fa-trash"></i></td> -->
            </tr>
            <tr v-for="dog in dogs" v-bind:key="dog.id">
              <td>{{ dog.id }}</td>
              <td>{{ dog.name }}</td>
              <td>{{ dog.age }}</td>
              <td>{{ dog.weight }} kg</td>
              <td>{{ dog.breed }}</td>

              <!-- <td id="show-modal" @click="showModal=true; setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)" class="btn btn-info m-1" ><i class="fas fa-pencil-alt"></i></td> -->
              <td @click.prevent="deleteItem(dog.id)" class="btn btn-danger m-1">
                <i class="fas fa-trash"></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </b-container>

    <b-modal id="modal-scoped">
      <template slot="modal-header" slot-scope="{ close }">
        <b-button size="sm" variant="outline-danger" @click="close()">x</b-button>
        <h5>Edit dog</h5>
      </template>

      <template slot="default">
        <div slot="body">
          <input
            type="hidden"
            disabled
            class="form-control"
            id="e_id"
            name="id"
            required
            v-model="dog.id"
          />
          Name:
          <input
            type="text"
            class="form-control"
            id="e_name"
            name="name"
            required
            v-model="dog.name"
          />
          Age:
          <input
            type="number"
            class="form-control"
            id="e_age"
            name="age"
            required
            v-model="dog.age"
          />
          Weight:
          <input
            type="text"
            class="form-control"
            id="e_weight"
            name="weight"
            required
            v-model="dog.weight"
          />
          Breed:
          <input
            type="text"
            class="form-control"
            id="e_breed"
            name="breed"
            required
            v-model="dog.breed"
          />
        </div>
      </template>

      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <b-button variant="secondary" @click="cancel()">Cancel</b-button>
        <b-button variant="primary" @click="editItem(); close()">OK</b-button>
      </template>
    </b-modal>

    <b-modal id="modal-create">
      <template slot="modal-header" slot-scope="{ close }">
        <b-button size="sm" variant="outline-danger" @click="close()">x</b-button>
        <h5>Create dog</h5>
      </template>

      <template slot="default">
        <div slot="body">
          <input
            type="hidden"
            disabled
            class="form-control"
            id="e_id"
            name="id"
            required
            v-model="dog.id"
          />
          Name:
          <input
            type="text"
            class="form-control"
            id="e_name"
            name="name"
            required
            v-model="dog.name"
          />
          Age:
          <input
            type="number"
            class="form-control"
            id="e_age"
            name="age"
            required
            v-model="dog.age"
          />
          Weight:
          <input
            type="text"
            class="form-control"
            id="e_weight"
            name="weight"
            required
            v-model="dog.weight"
          />
          Breed:
          <input
            type="text"
            class="form-control"
            id="e_breed"
            name="breed"
            required
            v-model="dog.breed"
          />
        </div>
      </template>

      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <b-button variant="secondary" @click="cancel()">Cancel</b-button>
        <b-button variant="primary" @click="handleSubmit()">OK</b-button>
      </template>
    </b-modal>

    <!-- <modal v-if="showModal" >
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
    </modal>
    -->
  </div>
</template>

<script>
import sidebar from "../components/Sidebar";
import { showDogsUser, deleteDog, editDog, addDog } from "../services/services";

export default {
  name: "show-dogs",
  components: { sidebar },
  data() {
    return {
      boxOne: "",
      alertMessage: "",
      alertType: "",
      dog: {
        id: "",
        name: "",
        age: "",
        weight: "",
        breed: ""
      },
      dogs: []
    };
  },
  mounted() {
    this.showDogs(this.$cookie.get("user_id")).then(res => {
      this.dogs = res;
    });
  },
  methods: {
    showDogs(userId) {
      this.dogs = showDogsUser(userId).then(res => res.data);
      return this.dogs;
    },
    deleteItem(dogId) {
      deleteDog(dogId).then(res => {
        this.alertMessage = "Dog deleted";
        this.alertType = "success";
        setTimeout(() => {
          this.alertMessage = "";
        }, 1000);
        return res;
      });
    },
    setVal(val_id, val_name, val_age, val_weight, val_breed) {
      this.dog = {
        id: val_id,
        name: val_name,
        age: val_age,
        weight: val_weight,
        breed: val_breed
      };
    },
    showMsgBoxOne(dog) {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure?")
        .then(value => {
          if (value === true) {
            this.boxOne = value;
            this.deleteItem(dog.id).then(res => res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    editItem() {
      let dog = {
        id: document.getElementById("e_id").value,
        name: document.getElementById("e_name").value,
        age: document.getElementById("e_age").value,
        weight: document.getElementById("e_weight").value,
        breed: document.getElementById("e_breed").value,
        user_id: this.$cookie.get("user_id")
      };
      editDog(dog).then(res => {
        this.showModal = false;
        this.$router.go();
        return res;
      });
    },
    handleSubmit() {
      let dog = {
        id: document.getElementById("e_id").value,
        name: document.getElementById("e_name").value,
        age: document.getElementById("e_age").value,
        weight: document.getElementById("e_weight").value,
        breed: document.getElementById("e_breed").value,
        user_id: this.$cookie.get("user_id")
      };
      addDog(dog).then(res => {
        if (res.data.message === "Dog created") {
          console.log(res.data.message);
          this.alertMessage = "Dog created";
          this.alertType = "success";
          this.$router.go();
          setTimeout(() => {
            this.alertMessage = "";
          }, 1000);
        } else {
          // verificar quando da erro
          this.alertMessage = "Dog not created";
          this.alertType = "danger";
          setTimeout(() => {
            this.alertMessage = "";
          }, 1000);
        }
      });
    }
  }
};
</script>
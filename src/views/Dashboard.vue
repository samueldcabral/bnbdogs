<template>
  <div>
    <b-container>
      <sidebar />
      <h1 class="mt-5">Welcome</h1>
      
      <div class="mt-5">
        <b-card-group deck>
          <b-card
            img-src="https://i.imgur.com/5dn8FLp.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-button variant="success" @click="$bvModal.show('modal-create'); setVal(dog.id, dog.name, dog.age, dog.weight, dog.breed)">Add a dog</b-button>

<!--             <b-button to="add-dog" variant="success">Add a Dog</b-button>-->          </b-card>
          <b-card
            img-src="https://i.imgur.com/U1pqelv.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-button href="#" variant="success">Book a Room</b-button>
          </b-card>
          <b-card
            img-src="https://i.imgur.com/zmJGcAu.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-button to="add-service" variant="success">Add Service</b-button>
          </b-card>
        </b-card-group>
      </div>
  
<b-modal id="modal-create">
    <template slot="modal-header" slot-scope="{ close }">
      <b-button size="sm" variant="outline-danger" @click="close()">
        x
      </b-button>
      <h5>Create dog</h5>
    </template>

    <template slot="default" >
      <div slot="body">
          
          <input type="hidden" disabled class="form-control" id="e_id" name="id"
                  required  v-model="dog.id">
          Name: <input type="text" class="form-control" id="e_name" name="name"
                  required  v-model="dog.name">
          Age: <input type="number" class="form-control" id="e_age" name="age"
          required  v-model="dog.age">
          Weight: <input type="text" class="form-control" id="e_weight" name="weight"
          required  v-model="dog.weight">
          Breed: <input type="text" class="form-control" id="e_breed" name="breed"
          required  v-model="dog.breed">
      </div> 
    </template>

    <template slot="modal-footer" slot-scope="{ ok, cancel }">
      <b-button variant="secondary" @click="cancel()">
        Cancel
      </b-button>
      <b-button variant="primary" @click="handleSubmit()">
        OK
      </b-button>
    </template>
  </b-modal>
      <!-- <div>
        <div class="mt-3">
          <b-card-group deck>
            <b-card border-variant="dark" header="Users" align="center">
              <b-card-text>{{ users }}</b-card-text>
            </b-card>
            <b-card border-variant="dark" header="Dogs" align="center">
              <b-card-text>{{ dogs }}</b-card-text>
            </b-card>
          </b-card-group>
          <b-card-group deck>
            <b-card border-variant="dark" header="Services" align="center">
              <b-card-text>{{ services }}</b-card-text>
            </b-card>
            <b-card border-variant="dark" header="Bookings" align="center">
              <b-card-text>{{ bookings }}</b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div> -->
    </b-container>
  </div>
</template>

<script>
import sidebar from "../components/Sidebar";
import { getUsers, getDogs, getServices, getBookings, addDog } from '../services/services';


export default {
  name: "dashboard",
  components: { sidebar },
  data () {
    return {
      users: [],
      dogs: [],
      services: [],
      bookings: [],
      dog: {
        id: '',
        name: '',
        age: '',
        weight: '', 
        breed: '',
      }
    }
  },
  mounted () {
    getUsers().then(res => {
      this.users = res
    });

    getDogs().then(res => {
      this.dogs = res
    });

    getServices().then(res => {
      this.services = res
    });

    getBookings().then(res => {
      this.bookings = res
    });
  },
  methods: {
    setVal(val_id, val_name, val_age, val_weight, val_breed) {
        this.dog = {
          id: val_id,
          name: val_name,
          age: val_age,
          weight: val_weight,
          breed: val_breed
        }
      },
      handleSubmit() {
        let dog = {
          id: document.getElementById('e_id').value,
          name: document.getElementById('e_name').value,
          age: document.getElementById('e_age').value,
          weight: document.getElementById('e_weight').value,
          breed: document.getElementById('e_breed').value,
          user_id: this.$cookie.get('user_id')
        }

        addDog(dog).then(res => {
          if (res.data.message === "Dog created") {
            console.log(res.data.message)
            this.alertMessage = "Dog created";
            this.alertType = "success";
            setTimeout(() => {
              this.alertMessage = ""
              this.$router.push("/show-dogs")
            }, 1000)
          } 
          // verificar quando da erro
          this.alertMessage = "Dog not created";
          this.alertType = "danger";
          setTimeout(() => {
            this.alertMessage = ""
          }, 1000)
          
        });

      }
  }

};


</script>
<style>
body {
  background-color: #fff !important;
}

img {
  width: 300px;
  height: 200px;
}
</style>
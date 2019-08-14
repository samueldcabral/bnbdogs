<template>
  <div>
    <b-container>
      <sidebar />
      <h1 class="mt-5">Add a dog</h1>
      <div class="mt-5">
        <b-card bg-variant="white" class="p-5">
        <b-alert v-if="alertMessage" variant="alertType" show>{{alertMessage}}</b-alert>
          <form @submit.prevent="handleSubmit">
            <b-form-group
              label-cols-lg="2"
              label="Dog Information"
              label-size="lg"
              label-class="font-weight-bold pt-2"
              class="mb-0"
            >
              <b-form-group
                label-cols-sm="3"
                label="Name:"
                label-align-sm="right"
                label-for="nested-name"
              >
                <b-form-input v-model="dog.name" id="nested-name"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Age:"
                label-align-sm="right"
                label-for="nested-age"
              >
                <b-form-input v-model="dog.age" id="nested-age"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Weight:"
                label-align-sm="right"
                label-for="nested-weight"
              >
                <b-form-input v-model="dog.weight" id="nested-weight"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Breed:"
                label-align-sm="right"
                label-for="nested-breed"
              >
                <b-form-input v-model="dog.breed" id="nested-breed"></b-form-input>
              </b-form-group>

            </b-form-group>
            <b-form-group
              label-cols-sm="11"
              label-align-sm="right"
            >
              <b-button type="submit" variant="success" >Add</b-button>
            </b-form-group>

          </form>
        </b-card>
      </div>


    </b-container>
  </div>
</template>
<script>
import sidebar from "../components/Sidebar";
import { addDog } from '../services/services';


export default {
  name: "add-dog",
  components: { sidebar },
  data () {
    return {
      alertMessage: '',
      alertType: '',
      dog: {
        name: '',
        age: '', 
        weight: '',
        breed: ''
      }
    }
  },
  mounted () {
    
  },
  methods: {
    handleSubmit() {
      let result = {
        name: this.dog.name,
        age: this.dog.age,
        weight: this.dog.weight,
        breed: this.dog.breed,
        user_id: 2
      };

      addDog(result).then(res => {
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

</style>
<template>
  <div class="col-6 rounded bg-light ml-5 pt-2 pb-2">
    <b-form @submit.prevent="salvar">
      <b-form-group
        label-cols-lg="2"
        label="Cadastro"
        label-size="lg"
        label-class="font-weight-bold pt-2"
        class="mb-0"
      ></b-form-group>

      <b-form-group
        label-align-sm="right"
        label-cols-sm="3"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-align-sm="right" label-cols-sm="3" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="user.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group
        label-align-sm="right"
        label-cols-sm="3"
        label="Your address:"
        label-for="input-3"
      >
        <b-form-input id="input-3" v-model="user.address" placeholder="Enter address"></b-form-input>
      </b-form-group>

      <b-form-group
        label-align-sm="right"
        label-cols-sm="3"
        label="Your telephone:"
        label-for="input-4"
      >
        <b-form-input id="input-4" v-model="user.phone" placeholder="Enter telephone"></b-form-input>
      </b-form-group>

      <b-form-group
        label-align-sm="right"
        label-cols-sm="3"
        label="Your password:"
        label-for="input-5"
      >
        <b-form-input id="input-5" v-model="user.password" type="password" required placeholder="Enter password"></b-form-input>
      </b-form-group>

      <b-form-group
        label-align-sm="right"
        label-cols-sm="3"
        label="Your password:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="user.password_confirmation"
          required
          type="password"
          placeholder="Retry your password"
        ></b-form-input>

        <b-button style="margin-left: 250px;" class="mt-2" type="submit" variant="primary">Submit</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { addUser } from "../services/services";

export default {
  data() {
    return {
      user: {
        email: "",
        name: "",
        phone: "",
        address: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  mounted() {

  },
  methods: {
    salvar() {
      console.log(this.user)
      addUser(this.user).then(res => {
        console.log(res)
        if (res.data.message === "Dog created") {
          console.log(res.data.message);
          this.alertMessage = "Dog created";
          this.alertType = "success";
          setTimeout(() => {
            this.alertMessage = "";
            this.$router.push("/registry");
          }, 1000);
        }
        // verificar quando da erro
        this.alertMessage = "Dog not created";
        this.alertType = "danger";
        setTimeout(() => {
          this.alertMessage = "";
        }, 1000);
      });
    }
  }
};
</script>




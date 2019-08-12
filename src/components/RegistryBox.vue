<template>
  <div class="col-4 rounded bg-light ml-5">
    <b-form @submit.prevent="salvar" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="user.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" v-model="user.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Your address:" label-for="input-3">
          <b-form-input id="input-3" v-model="user.addres" required placeholder="Enter address"></b-form-input>
        </b-form-group>

      <b-form-group id="input-group-4" label="Your telephone:" label-for="input-4">
        <b-form-input id="input-4" v-model="user.phone" required placeholder="Enter telephone"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Your password:" label-for="input-5">
        <b-form-input id="input-5" v-model="user.password" required placeholder="Enter password"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Your password:" label-for="input-5">
        <b-form-input id="input-5" v-model="user.password" required placeholder="Retry your password"></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card header="Form Data Result">
      <pre class="m-0">{{ user }}</pre>
    </b-card>
  </div>
</template>

<script>
import User from '../services/users'


export default {
  data() {
    return {
      user: {
        email: "",
        name: "",
        phone: "",
        address: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    salvar() {
      User.salvar(this.user).then(resposta => {
        alert('Salvo com sucesso!')
      })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.user.email = "";
      this.user.name = "";
      this.user.phone = "";
      this.user.address = "";
      this.user.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>




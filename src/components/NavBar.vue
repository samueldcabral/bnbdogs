<template>
  <b-navbar toggleable="lg" type="light" variant="faded">
    <b-navbar-brand href="#">Bnb Dogs</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <div class="top-right links mr-5">
        <router-link to="/" class="p-2">
          <b-button variant="outline-dark">Home</b-button>
        </router-link>

        <router-link to="/about" class="p-2">
          <b-button variant="outline-dark">About</b-button>
        </router-link>

        <b-dropdown id="dropdown-form" text="Login" ref="dropdown" class="m-2">
          <b-dropdown-form >
            <b-form-group label="Email" style="width=250px;" label-for="dropdown-form-email" @submit.stop.prevent>
              <b-form-input id="dropdown-form-email" size="sm" placeholder="email@example.com"></b-form-input>
            </b-form-group>

            <b-form-group label="Password" label-for="dropdown-form-password">
              <b-form-input
                id="dropdown-form-password"
                type="password"
                size="sm"
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
            <b-button variant="primary" size="sm" @click="onClick">Sign In</b-button>
          </b-dropdown-form>
          <b-dropdown-divider></b-dropdown-divider>
          <!-- <b-dropdown-item-button>New around here? Sign up</b-dropdown-item-button> -->
          <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
        </b-dropdown>

        <router-link to="/registry" class="p-2">
          <b-button variant="outline-dark" >register</b-button>
        </router-link>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>


<script>
export default {
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true);
    }
  }
};
</script>
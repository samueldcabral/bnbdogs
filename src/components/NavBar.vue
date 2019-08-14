<template>
  <b-navbar toggleable="lg" type="light" variant="faded">
    <b-navbar-brand href="#" class="text-light" style="font-size: 1.6rem" >Bnb Dogs</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <div class="top-right links">
        <router-link to="/">
          <b-button variant="outline-light" size="lg">Home</b-button>
        </router-link>

        <router-link to="/about">
          <b-button variant="outline-light" size="lg">About</b-button>
        </router-link>

        <b-button variant="outline-light" href="Login" size="lg">Login</b-button>
        <b-button variant="outline-light" href="register" size="lg">register</b-button>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>
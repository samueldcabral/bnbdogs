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

 <b-dropdown text="Login" variant="outline-dark" class="p-2 mr-1">
          <div class="p-1">

          <!-- <b-form-input
            id="input-1"
            v-model="form.email"
            type="login"
            required
            placeholder="Enter Login"
          ></b-form-input>

          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter Password"
          ></b-form-input> -->

            <!-- <label for="email">Login:</label> -->
            <input class="rounded mb-3" variant="outline-dark" type="text" id="email" placeholder="Enter your email" />

            <!-- <label for="password">Senha:</label> -->
            <input class="rounded mb-3" variant="outline-dark" type="text" id="password" placeholder="Enter your password" />

            <div class="pt-1">
              <input type="submit" value="submit"/>
              <a class="ml-4" href="#">Esqueci a senha</a>
            </div>

          </div>
        </b-dropdown>

        <b-button variant="outline-dark" class="p-2" href="registry">register</b-button>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>
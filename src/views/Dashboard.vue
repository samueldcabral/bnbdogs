<template>
  <div>
    <navBar class="pl-5 ml-5"/>
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
            <b-button to="add-dog" variant="success">Add a Dog</b-button>
          </b-card>
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
import NavBar from "../components/NavBar";
import sidebar from "../components/Sidebar";
import { getUsers, getDogs, getServices, getBookings } from '../services/services';


export default {
  name: "dashboard",
  components: { NavBar, sidebar },
  data () {
    return {
      users: [],
      dogs: [],
      services: [],
      bookings: [],
      dog: null
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
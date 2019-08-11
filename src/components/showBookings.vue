<template>
  <div>
    <navBar class="pl-5 ml-5"/>
    <b-container class="bg-white">
      <sidebar />
      <div class="mt-5 p-2" >
        <h2 class="m-5">List of bookings</h2>

        <div role="tablist">
          <b-card no-body class="mb-1" v-for="booking in bookings" v-bind:key="booking.id">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 variant="info">Booking date: {{ booking.booking_date }}</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text><strong>Check-in_date:</strong> {{ booking['check-in_date'] ? booking['check-in_date'] : "Not confirmed" }}  ---  <strong>Check-out_date:</strong> {{ booking['check-out_date'] ? booking['check-out_date']  : "Not confirmed" }}</b-card-text>
                <b-card-text><strong>Status:</strong> {{ booking.status }}  ---  <strong>Price:</strong> $ {{ booking.day_price }}</b-card-text>
                <b-card-text><strong>Dog:</strong> {{booking.dog_id }}<!-- {{ dogName(booking.dog_id).then(res => res) }} --></b-card-text>
                <b-card-text><strong>Services:</strong> </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <!-- <div class="table table-borderless" id="table">
          <table class="table table-borderless" id="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Booking date</th>
                      <th>check-in_date</th>
                      <th>check-out_date</th>
                      <th>status</th>
                      <th>day_price</th>
                      <th>dog</th>
                  </tr>
              </thead>
              <tr v-for="booking in bookings" v-bind:key="booking.id">
                  <td>{{ booking.id }}</td>
                  <td>{{ booking.booking_date }}</td>
                  <td>{{ booking.check-in_date ? booking.check-in_date : "Not confirmed" }}</td>
                  <td>{{ booking.check-out_date ? booking.check-out_date : "Not confirmed" }}</td>
                  <td>{{ booking.status }}</td>
                  <td>{{ booking.day_price }}</td>
                  <td>{{ booking.dog_id }}</td>
              </tr>
          </table>
      </div> -->
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import sidebar from "../components/Sidebar";
import { showBookingsUser, findDogByID } from '../services/services';

export default {
    name: "show-bookings",
    components: { NavBar, sidebar },
    data() {
      return {
        bookings: []
      }
    }, 
    mounted () {
      this.showBookings(2).then(res => {
        this.bookings = res
      });
    }, 
    methods: {
      showBookings(userId) {
        this.bookings = showBookingsUser(userId).then(res => res.data)
        return this.bookings
      },
      findDogByIDName(dogId) {
        this.dog = findDogByID(dogId).then(res => res)
        return this.dog
      },
      async dogName(dogId) {
        let name = await this.findDogByIDName(dogId).then(res => {
          return res['name']
        })
        return name;
      }
    }
  }
</script>
<style>
body {
  overflow: scroll !important;
}
</style>
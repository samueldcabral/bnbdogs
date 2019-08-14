<template>
  <div>
    <b-container class="bg-white">
      <sidebar />
      <div class="mt-5 p-2" >
        <h2 class="m-5">List of bookings</h2>

        <div role="tablist" >
          <b-card no-body class="mb-1" v-for="booking in bookings" v-bind:key="booking.id">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="'accordion-'+booking.id" variant="info">Booking date: {{ booking.booking_date }}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-'+booking.id" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text><strong>Check-in_date:</strong> {{ booking['check-in_date'] ? booking['check-in_date'] : "Not confirmed" }}  ---  <strong>Check-out_date:</strong> {{ booking['check-out_date'] ? booking['check-out_date']  : "Not confirmed" }}</b-card-text>
                <b-card-text><strong>Status:</strong> {{ booking.status }}  ---  <strong>Price:</strong> $ {{ booking.day_price }}</b-card-text>
                <b-card-text><strong>Dog:</strong> {{booking.dog_id }}<!-- {{ dogName(booking.dog_id) }} --></b-card-text>
                <b-card-text>
                    <!-- <b-button @click="$bvModal.show('modal-scoped'); showBookingServicesByB(booking.id)">Show Services</b-button> -->
                  <!-- <strong>Services: </strong>
                  <ul v-for="servb in bookingsServices" v-bind:key="servb.id">
                    <li>Description: {{servb.description}}</li>
                    <li>Price: $ {{servb.price}}</li>
                  </ul>  -->
                </b-card-text>
                <b-card-text v-if="booking.status === 'pending'"><strong>Add Services: </strong> 
                  <div>
                    <b-form-group>
                      <div class="form-check form-check-inline" v-for="serv in services" v-bind:key="serv.id">
                        <input v-model="selected" class="form-check-input" type="checkbox" :id="'inlineCheckbox'+serv.id" :value="serv.id">
                        <label class="form-check-label" :for="'inlineCheckbox'+serv.id">{{serv.description}} - $ {{serv.price}}</label>
                      </div>
                    </b-form-group>
                      <b-button variant="success" @click="addService(booking.id)">Add service</b-button>
                  </div>
                </b-card-text>

              </b-card-body>
            </b-collapse>
          </b-card>
        </div>

<!-- MODAL -->

<b-modal id="modal-scoped">
    <template slot="modal-header" slot-scope="{ close }">
      <!-- Emulate built in modal header close button action -->
      <h5>Services</h5>
      <b-button size="sm" variant="outline-danger" @click="close()">
        X
      </b-button>
    </template>

    <template slot="default">
      <p v-for="bs in bookingsServices" v-bind:key="bs.id">{{bs.id}}</p>
    </template>

    <template slot="modal-footer" slot-scope="{ cancel}">
      <b-button size="sm" variant="secondary" @click="cancel()">
        Ok
      </b-button>
    </template>
  </b-modal>

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
import sidebar from "../components/Sidebar";
import { showBookingsUser, getServices, addServiceBooking, showBookingServicesByBooking, findDogNameByID } from '../services/services';

export default {
    name: "show-bookings",
    components: { sidebar },
    data() {
      return {
        boxTwo: '',
        selected: [],
        services: [],
        options: [],
        bookings: [],
        bookingsServices: []
      }
    }, 
    mounted () {
      this.showBookings(2).then(res => {
        this.bookings = res
      });
      
      this.showAllServices().then(res => {
        this.services = res
      });

    }, 
    methods: {
      showBookings(userId) {
        return showBookingsUser(userId).then(res => res.data)
      },
      findDogByIDName(dogId) {
        return findDogNameByID(dogId).then(res => res)
      },
      dogName(dogId) {
        return this.findDogByIDName(dogId)
      },
      showAllServices() {
        return getServices().then(res => res)
      },
      showBookingServicesByB(bookingId) {
        return showBookingServicesByBooking(bookingId).then(res =>  res.data)
      },
      addService(bookingId) {
        let serv = {}
        this.selected.map(select => {
          serv = {
            booking_id: bookingId,
            service_id: select
          }
          addServiceBooking(bookingId, serv).then(res => console.log(res))
          alert('Service Added!')
        })
        return serv;
      },

/*       bookService(bookId) {
        this.showBookingServicesByB(bookId).then(res => {
        this.bookingsServices = res
        console.log(this.bookingsServices)
      })
      } */
    }
  }
</script>
<style>
body {
  overflow: scroll !important;
}
</style>
<template>
  <div class="bg-white p-5 box" :class="{ active: isActive}">
    <div>
      <h3>Hey, Who's a good boy?</h3>

      <b-form-group label="Select the type of your room.">
        <b-form-radio
          v-model="dayprice"
          name="some-radios"
          value="25"
          aria-selected="d"
        >Standard - $25</b-form-radio>
        <b-form-radio v-model="dayprice" name="some-radios" value="50">Premium - $50</b-form-radio>
      </b-form-group>

      <p>Save the date</p>
      <date-picker v-model="time1" range appendToBody :lang="lang" format="YYYY-MM-DD"></date-picker>
      <br />
      <br />
      <b-button variant="primary" :disabled="time1 == null" @click="postBooking" class="button" v-if="!isActive">Book now!</b-button>
    </div>
    <div :class="[{ displayed: isActive }, { notDisplayed: !isActive }]"> 
      <h3>Niiice, you're almost there!</h3>

      <b-form-group label="Choose which good boy is staying with us!">
        <b-form-radio
          v-for="dog in dogs"
          v-bind:key="dog.id"
          v-model="dogId"
          :value="dog.id"
        >{{dog.name}}</b-form-radio>
        
      </b-form-group>

      <br />
      <br />
      <b-button variant="primary" @click="postBooking" class="button">Book now!</b-button>
    </div>
  </div>
</template>

<script>
import { addBooking, getUser, showDogsUser } from "../services/services";
import DatePicker from "vue2-datepicker";
export default {
  components: { DatePicker },
  data: function() {
    return {
      user: "",
      dogs: [],
      dogId: "",
      time1: null,
      dayprice: "25",
      bookingDate: "",
      isActive: false,
      lang: {
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        placeholder: {
          date: "Select Date",
          dateRange: "Select Date Range"
        }
      }
    };
  },
  methods: {
    async postBooking() {
      this.bookingDate = new Date(Date.now());

      //To get the duration you subtract the later date from the earlier and it will get the duration
      let duration = new Date(this.time1["1"] - this.time1["0"]).getDate();

      if (!this.$cookie.get("user_id")) { //If not registered , go do that
        this.$router.push("/registry");
      } else {
        this.isActive = true;
        this.user = await getUser(this.$cookie.get("user_id")); //get the user from cookies
        let response = await showDogsUser(this.user.id);
        this.dogs = response.data;

        //creating payload
        let booking = {
          booking_date: this.getDate(this.bookingDate),
          "check-in_date": this.getDate(this.time1["0"]),
          "check-out_date": this.getDate(this.time1["1"]),
          duration,
          day_price: parseInt(this.dayprice),
          dog_id: this.dogId
        };

        //If you haven't select the dog yet, you can't post to the backend
        if(this.dogId) {
          let result = await addBooking(booking);
          if (result.data.message === "Booking created") {
              setTimeout(() => {
                this.alertMessage = "";
                this.$router.push("/dashboard");
              }, 1000);
            } else {
              // verificar quando da erro
              alert("Booking not created");
              setTimeout(() => {
                this.alertMessage = "";
              }, 1000);
            }
        }
      }
    },
    getDate(dateSent) {
      return `${dateSent.getFullYear()}-${dateSent.getMonth() +
        1}-${dateSent.getDate()}`;
    }
  }
};
</script>
<style scoped>
.box {
  width: 35rem;
  transition-property: width;
  transition-duration: 2s;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
}
.button {
  margin-top: 10px;
}

.active {
  width: 70rem;
}

.displayed {
  display: block;
}

.notDisplayed {
  display: none;
}

</style>
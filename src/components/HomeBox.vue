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

      <date-picker v-model="time1" range appendToBody :lang="lang" format="YYYY-MM-DD"></date-picker>
      <br />
      <br />
      <b-button variant="primary" @click="postBooking" class="button">Book now!</b-button>
      <!-- <b-button variant="primary" @click="setCookie" class="button">cccc now!</b-button> -->
    </div>
    <div>
      <b-form-group label="Select the type of your room.">
        <b-form-radio
          v-model="dayprice"
          name="some-radios"
          value="25"
          aria-selected="d"
        >Standard - $25</b-form-radio>
        <b-form-radio v-model="dayprice" name="some-radios" value="50">Premium - $50</b-form-radio>
      </b-form-group>

      <date-picker v-model="time1" range appendToBody :lang="lang" format="YYYY-MM-DD"></date-picker>
      <br />
      <br />
      <b-button variant="primary" @click="postBooking" class="button">Book now!</b-button>
    </div>
  </div>
</template>

<script>
import { addBooking } from "../services/services";
import DatePicker from "vue2-datepicker";
export default {
  components: { DatePicker },
  data: function() {
    return {
      user: "a",
      time1: "",
      dayprice: "25",
      bookingDate: "",
      dogId: 1,
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
      },
      isActive: false
    };
  },
  methods: {
    postBooking() {
      this.bookingDate = new Date(Date.now());
      //To get the duration you subtract the later date from the earlier and it will get the duration
      let duration = new Date(this.time1["1"] - this.time1["0"]).getDate();

      if (!this.$cookie.get("user") && this.user === "") {
        this.$router.push("/signup");
      } else {
        this.isActive = true;
        let booking = {
          booking_date: this.getDate(this.bookingDate),
          "check-in_date": this.getDate(this.time1["0"]),
          "check-out_date": this.getDate(this.time1["1"]),
          duration,
          day_price: parseInt(this.dayprice),
          dog_id: this.dogId
        };
        console.log(booking);

        // addBooking(booking).then(res => {
        //   if (res.data.message === "Booking created") {
        //     console.log(res.data.message);
        //     alert("Booking created");

        //     setTimeout(() => {
        //       this.alertMessage = "";
        //     }, 1000);
        //   } else {
        //     // verificar quando da erro
        //     alert("Booking not created");
        //     setTimeout(() => {
        //       this.alertMessage = "";
        //     }, 1000);
        //   }
        // });
      }
    },
    getDate(dateSent) {
      return `${dateSent.getFullYear()}-${dateSent.getMonth() +
        1}-${dateSent.getDate()}`;
    },
    setCookie() {
      // this.$cookie.set("user", "samuel", 1);
      this.$cookie.delete("user");
    }
  }
};
</script>
<style scoped>
.box {
  width: 75rem;
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
</style>
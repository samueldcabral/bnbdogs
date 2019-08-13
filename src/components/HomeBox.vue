<template>
  <div class="bg-white p-5">
    <h3>Hey, Who's a good boy?</h3>
    <p>Book your room now</p>
    <br />
    <date-picker v-model="time1" range appendToBody :lang="lang" format="YYYY-MM-DD" confirm></date-picker>
    <br />
    <b-button variant="primary" @click="postBooking" class="button">Book now!</b-button>
  </div>
</template>

<script>
import { addBooking } from "../services/services";
import DatePicker from "vue2-datepicker";
export default {
  components: { DatePicker },
  data() {
    return {
      time1: "",
      dayprice: 666,
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
      }
    };
  },
  methods: {
    postBooking() {
      this.bookingDate = new Date(Date.now());
      let duration = new Date(this.time1["1"] - this.time1["0"]).getDate();

      let booking = {
        booking_date: this.getDate(this.bookingDate),
        "check-in_date": this.getDate(this.time1["0"]),
        "check-out_date": this.getDate(this.time1["1"]),
        duration,
        day_price: this.dayprice,
        dog_id: this.dogId
      };

      console.log(booking);

      addBooking(booking).then(res => {
        if (res.data.message === "Booking created") {
          console.log(res.data.message);
          alert("Booking created");

          setTimeout(() => {
            this.alertMessage = "";
            // this.$router.push("/show-dogs")
          }, 1000);
        }
        // verificar quando da erro
        alert("Booking not created");
        setTimeout(() => {
          this.alertMessage = "";
        }, 1000);
      });
    },
    getDate(dateSent) {
      return `${dateSent.getFullYear()}-${dateSent.getMonth() +
        1}-${dateSent.getDate()}`;
    }
  }
};
</script>
<style scoped>
div {
  width: 50%;
  border-radius: 6px;
}
.button {
  margin-top: 10px;
}
</style>
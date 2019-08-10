<template>
  <div class="sidebar" :class="{'show': showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showSide"></i>
    </div>
    <div class="navigation-icons">
      <i class="fas fa-home"></i>
      <i class="fas fa-calendar-alt"></i>
      <i class="fas fa-paw"></i>
      <i class="fas fa-history"></i>
      <i class="fas fa-info-circle"></i>
    </div>
    <div class="navigation-links">
      <transition-group name="fade">
        <div v-show="showLink" key="1">Home</div>
        <div v-show="showLink" key="2">Booking</div>
        <div v-show="showLink" key="3">Dogs</div>
        <div v-show="showLink" key="4">History</div>
        <div v-show="showLink" key="5">FAQ</div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  data: () => {
    return {
      showSidebar: false,
      showLink: false
    }
  },
  methods: {
    showSide() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 500);
      }    
    }
  }
}
</script>
<style scoped>

  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    padding: 10px;
    min-height: 100vh;
    background-image: linear-gradient(120deg, #5d94d7 0%, #b8dded 70%);
    opacity: 0.8;
    border: solid #fff;
    border-width: 0 1px 0 0;
    z-index: 999;
    transition: all .5s ease-in-out;
  }

  .sidebar .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;
  }

  .sidebar .control i {
    font-size: 2rem;
    cursor: pointer;
    transition: all .5s ease-in-out;
  }

  .sidebar.show {
    width: 12rem;
  }

  .sidebar.show .control > i {
    color: #fff;
    transform: rotateZ(-180deg);
  }

  .sidebar.show .navigation-icons {
    color: #fff;
  }

  .sidebar .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    float: left;
  }

  .sidebar .navigation-icons i {
    font-size: 2rem;
    padding: 10px 0;
    cursor: pointer;
    transition: all .5s ease-in-out;
  }

  .sidebar .navigation-icons i:hover {
    color: #fff;
  }

  .navigation-links {
    padding-top: 14px;
    float: left;
  }

  .navigation-links div {
    font-size: 1.35rem;
    padding-left: 10px;
    margin-bottom: 18px;
    cursor: pointer;
  }

  .navigation-links div:hover {
    color: #fff;
  }



</style>
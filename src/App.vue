<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div class="main">
    <div style="position:fixed;bottom:0;display:flex;justify-content:center;left:0;right:0;">
      <div style="">
        <img src="../src/assets/logo.png" alt="logo"/>
        <!-- <img src="Fhole" alt="F"> -->
      </div>
    </div>

    <div class="section red">
      <h1>Red</h1>
    </div>

    <div class="section orange">
      <h1>Orange</h1>
    </div>

    <div class="section yellow">
      <h1>Yellow</h1>
    </div>

    <div class="section green">
      <h1>Green</h1>
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
// import Fhole from '@/assets/f-hole.svg'
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

  export default defineComponent({
    name: "App",

    setup() {
      return {
        // Fhole
      }
    }
  })
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/** Full Page Scroll-Snapping HTML Sections */
.main {
  top:0;
  left:0;
	height: 100vh;
	overflow-y: auto;
	scroll-snap-type: y mandatory;
}

.section {
	height: 100vh;
	scroll-snap-align: center;
  padding:0;
}

/** section colors */
.red {
	background: #f44336;
}
.orange {
	background: #ff9800;
}
.yellow {
	background: #ffd600;
}
.green {
	background: #4caf50;
}
/** Section inner layout */
.section {
	padding: 0;
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
}

.main::-webkit-scrollbar {
  display: none;
}

</style>

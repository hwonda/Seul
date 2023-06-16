<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div class="main">
    <section class="red">
      <h1>Red</h1>
    </section>

    <section class="orange">
      <h1>Orange</h1>
    </section>

    <section class="yellow">
      <h1>Yellow</h1>
    </section>

    <section class="green">
      <h1>Green</h1>
    </section>

    <section class="blue">
      <h1>Blue</h1>
    </section>

    <section class="indigo">
      <h1>Indigo</h1>
    </section>

    <section class="violet">
      <h1>Violet</h1> 
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/** Full Page Scroll-Snapping HTML Sections */
.main {
  top:0;
  left:0;
	height: 100vh;
	overflow-y: auto;
	scroll-snap-type: y mandatory;
}

section {
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
.blue {
	background: #2196f3;
}
.indigo {
	background: #3f51b5;
}
.violet {
	background: #673ab7;
}

/** Section inner layout */
section {
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

/** Reset / Basic styling */
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	color: #fff;
	font-size: 2vmax;
}

h1 {
	font-size: 4em;
}

</style>

<template>
  <section class="fullpage first background_cello">
    <div class="text-gradient">Cellist, Seulgi Kim.</div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

.background_cello {
  background-image: url('../assets/images/cello_background.jpg');
  z-index:10;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.text-gradient {
  position: relative;
  top: 10px;
  font-size: 40px;
  font-weight: 700;
  background: linear-gradient(90deg, #ff5733, #c5cc00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: blink 0.7s linear infinite alternate, typing 2s steps(30), position 1s steps(60) 2s forwards;
  padding: 0 10px;

  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  0% {
    width: 0;
  }
  to{
    width: 360px;
  }
}

@keyframes position {
  0% {
    position: fixed;
    top: calc(50% - 20px);
    border: 0;
  }
  to{
    position: fixed;
    border: 0;
  }
}


</style>
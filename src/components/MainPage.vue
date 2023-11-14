<template>
  <section class="fullpage first background_cello">
    <div class="subtitle">Fall into</div>
    <div class="subtitle">the Cello</div>
    <div class="subtitle">with</div>
    <div class="text-gradient" :style="{ position: isFixed ? 'fixed' : 'relative'}">Cellist, Seulgi Kim.</div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isFixed = ref(false);
const scrollPosition = ref(0);

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  isFixed.value = window.scrollY >= window.innerHeight / 2; // 50vh
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.subtitle {
  color: white;
  font-size: 20px;
  font-family: 'Sansita Swashed', cursive;
  font-weight: 700;
  text-align: center;
}
.background_cello {
  background-image: url('../assets/images/cello_background.jpg');
  z-index:10;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    border: 0;
  }
  to{
    border: 0;
  }
}

@media screen and (max-width: 576px) {
  .subtitle {
    font-size: 15px;
  }
  .text-gradient {
    font-size: 30px;
    animation: blink 0.7s linear infinite alternate, typing 2s steps(30), position 1s steps(60) 2s forwards;
  }
  @keyframes typing {
    0% {
      width: 0;
    }
    to{
      width: 280px;
    }
  }
}

</style>
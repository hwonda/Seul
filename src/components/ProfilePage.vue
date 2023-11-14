<template>
  <section class="fullpage second">
    <div class="profile-image">
      <div style="width:30vw; height: 70vh;"></div>
    </div>
    <div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@media screen and (max-width: 576px) {
  .fullpage {
    background-color: white;
  }
  .profile-image{
    display: none;
  }
}
.second {
  background: linear-gradient(180deg, #000000, #2d2424);
  display: flex;
  align-items: center;
}
.profile-image{
  position: relative;
  left: 20px;
  background-image: url('../assets/images/profile0.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0 15px #fff);
  /* box-shadow: 0 0 100px #3c01014e; */
}
</style>
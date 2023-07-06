<template>
  <div id="app">
    <div id="scroll">
      <div class="sections-menu">
        <span
          class="menu-point"
          :class="{ active: activeSection == index }"
          @click="scrollToSection(index)"
          v-for="(offset, index) in offsets"
          :key="index"
          style="display:flex;justify-content:center"
        >
        </span>
      </div>
      <div style="position:fixed;bottom:10px;display:flex;justify-content:center;left:0;right:0;">
        <img src="../src/assets/f-hole.svg"  width="40" height="40" alt="f-hole" style="position:relative;left: -1.5rem;">
        <img src="../src/assets/f-hole.svg"  width="40" height="40" style="transform: rotateY( 180deg ); position:relative;left: 1.5rem;" alt="f-hole">
      </div>
      <section class="fullpage first">
        <h1>김슬기 Portfolio</h1>
        <p>by <a href="https://webdeasy.de/?referer=cp-NVOEBL" target="_blank">hwonda</a></p>
      </section>
      <section class="fullpage second">
        <h1>캐러셀, 연혁</h1>
        <p>made with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
      </section>
      <section class="fullpage third">
        <h1>비디오</h1>
        <p>여러가지 <span><b>유튜브</b></span> videos</p>
      </section>
      <section class="fullpage fourth">
        <h1>contact</h1>
        <p>by<span><b>e-mail, phone</b></span></p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const inMove = ref(false)
const inMoveDelay = ref(1000)
const activeSection = ref(0)
const offsets = ref([])
const touchStartY = ref(0)

const calculateSectionOffsets = () => {
  let sections = document.getElementsByTagName('section')
  let length = sections.length
  offsets.value = []
  for (let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop
    offsets.value.push(sectionOffset)
  }
}

const handleMouseWheel = (e: WheelEvent) => {
  if (e.deltaY > 0 && !inMove.value) {
    moveUp()
  } else if (e.deltaY < 0 && !inMove.value) {
    moveDown()
  }
  e.preventDefault()
  return false
}

const moveDown = () => {
  inMove.value = true
  activeSection.value--
  if (activeSection.value < 0) activeSection.value = offsets.value.length - 1
  scrollToSection(activeSection.value, true)
}

const moveUp = () => {
  inMove.value = true
  activeSection.value++
  if (activeSection.value > offsets.value.length - 1) activeSection.value = 0
  scrollToSection(activeSection.value, true)
}

const scrollToSection = (id: number, force = false) => {
  if (inMove.value && !force) return false
  activeSection.value = id
  inMove.value = true
  let section = document.getElementsByTagName('section')[id]
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
  setTimeout(() => {
    inMove.value = false
  }, inMoveDelay.value)
  return true
}

const touchStart = (e: TouchEvent) => {
  e.preventDefault()
  touchStartY.value = e.touches[0].clientY
}

const touchMove = (e: TouchEvent) => {
  if (inMove.value) return false
  e.preventDefault()
  const currentY = e.touches[0].clientY
  if (touchStartY.value < currentY) {
    moveDown()
  } else {
    moveUp()
  }

  touchStartY.value = 0
  return false
}

onMounted(() => {
  calculateSectionOffsets()
  window.addEventListener('wheel', handleMouseWheel, { passive: false })
  window.addEventListener('touchstart', touchStart, { passive: false })
  window.addEventListener('touchmove', touchMove, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleMouseWheel)
  window.removeEventListener('touchstart', touchStart)
  window.removeEventListener('touchmove', touchMove)
})
</script>


<style scoped>

#app{
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
body {
  color: #FFF;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
}


h2 {
  position: fixed;
}

.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  border:0;
  margin:0 !important;
}

h1 {
  font-size: 6em;
  margin: 0;
  text-align: center;
  padding: 0 1rem;
}

p {
  font-size: 1em;
}

.fullpage a, .fullpage span {
  text-decoration: none;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  color: #fff;
  margin-left: 5px;
}
.first {
  background-color: #FFC7C7;
}
.second {
  background-color: #FFE2E2;
}
.third {
  background-color: #F6F6F6;
}

.fourth {
  background-color: #8785A2;
}

h1.black {
  color: #000;
}

.sections-menu {
  transform: translateY(-50%);
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  right: 0;
  left: 0;
}

.sections-menu .menu-point {
  width: 3px;
  height: 30px;
  background-color: #000;
  display: block;
  margin: 0 5px;
  opacity: .6;
  transition: .4s ease-in-out all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

.sections-menu .menu-point:hover {
  opacity: 1;
  transform: scale(1.2);
}

:deep(::-webkit-scrollbar-track) {
  display: none;
  width: 1px;
  background: black
}

/* Hide scrollbar for IE, Edge and Firefox */
html, body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>

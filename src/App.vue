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
      <MainPage/>
      <ProfilePage/>
      <VideoPage/>
      <ContactPage/>
    </div>
    <div class="footer-nav" style="">
      <img src="../src/assets/f-hole.svg" class="left-hole" alt="f-hole">
      <img src="../src/assets/f-hole.svg" class="right-hole" alt="f-hole">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import MainPage from './components/MainPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import VideoPage from './components/VideoPage.vue';
import ContactPage from './components/ContactPage.vue';

const inMove = ref<boolean>(false)
const inMoveDelay = ref<number>(1000)
const activeSection = ref<number>(0)
const offsets = ref<Array<number>>([])
const touchStartY = ref<number>(0)

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

</style>

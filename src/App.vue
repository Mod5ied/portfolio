<script setup>
import { onMounted, ref, inject } from '@vue/runtime-core';
const emitter = inject('emitter');

let parentDiv = ref(null)
let currentState = ref(null)

function checkStorage() {
  const state = localStorage.getItem("state")
  return state
}
function persistState() {
  switch (currentState.value) {
    case "dark":
      parentDiv.value.classList.add("dark")
      break;
    default:
      parentDiv.value.classList.remove("dark")
      break;
  }
}
emitter.on('togglTheme', (payload) => {
  /* write dark to storage */
  if (payload === 'dark') {
    localStorage.setItem("state", payload)
    parentDiv.value.classList.add(payload)
    return
  }
  localStorage.setItem("state", payload)  
  parentDiv.value.classList.remove("dark")
})

onMounted(() => {
  parentDiv.value = document.getElementById("parent")
  currentState.value = checkStorage()
  persistState()
})
</script>

<template>
  <div id="parent">
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

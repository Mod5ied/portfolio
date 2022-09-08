<template>
  <nav class="flex items-center justify-center w-full">
    <div class="dockWrapper">
      <ul class="flex flex-row justify-around w-full px-3 py-2 bg-white dark:bg-slate-800">
        <button @click="dispatchToggle('intro')" title="Home" :class="Props.useIntro ? 'tabs_active' : 'tabs'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 dark:text-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </button>
        <button @click="dispatchToggle('skills')" title="Skills" :class="Props.useSkills ? 'tabs_active' : 'tabs'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 dark:text-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
        </button>
        <button @click="dispatchToggle('about')" title="About me" :class="Props.useAbout ? 'tabs_active' : 'tabs'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 dark:text-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button @click="dispatchToggle('git')" title="Github" :class="Props.useGit ? 'tabs_active' : 'tabs'">
          <ion-icon name="logo-github" class="w-6 h-6 dark:text-slate-100"></ion-icon>
        </button>
        <button title="Email" :class="Props.isActive ? 'tabs_active' : 'tabs'">
          <ion-icon title="Email" name="mail-unread-outline" class="w-6 h-6 dark:text-slate-100"></ion-icon>
        </button>
        <button @click="dispatchToggle('works')" title="Works" :class="Props.useWorks ? 'tabs_active' : 'tabs'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 dark:text-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
          </svg>
        </button>
        <button @click="setTheme" title="Theme" :class="darkState ? 'tabs_dark' : 'tabs_light'">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
            </path>
          </svg>
        </button>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { inject, onMounted, ref } from 'vue';

let currentState = ref(null);
let darkState = ref(true);

const emitter = inject('emitter');
const Props = defineProps({
  useIntro: {
    type: Boolean,
    default: false
  },
  useDarkMode: {
    type: Boolean,
    default: false
  },
  useAbout: {
    type: Boolean,
    default: false
  },
  useSkills: {
    type: Boolean,
    default: false
  },
  useWorks: {
    type: Boolean,
    default: false
  },
  useGit: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['togglSkills', 'togglAbout', 'togglWorks', 'togglIntro', 'togglGit'])

function dispatchToggle(tab) {
  switch (tab) {
    case "skills":
      emit('togglSkills')
      break;
    case "about":
      emit('togglAbout')
      break;
    case "works":
      emit('togglWorks')
      break;
    case "intro":
      emit('togglIntro')
      break
    case "git":
      emit('togglGit')
      break
  }
}

function checkState() {
  return localStorage.getItem("state")
}

function setTheme() {
  if (!darkState.value || darkState.value == null) {
    /* emits a set-dark up to parent. toggles to dark theme */
    emitter.emit('togglTheme', "dark");
    return darkState.value = !darkState.value;
  }
  emitter.emit('togglTheme', 'light');
  darkState.value = !darkState.value;
}

onMounted(() => {
  currentState.value = checkState()
  if (currentState.value === "dark") {
    darkState.value = true
  } else {
    darkState.value = false
  }
})
</script>
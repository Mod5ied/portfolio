<template>
  <div id="parent_container" class="bg-gray-800">
    <header
      class="fixed top-0 flex flex-row items-center justify-between w-full h-16 px-12 py-2 bg-gray-900"
    >
      <span class="home_links" id="header_logo">
        <h1 class="text-xl">Logo</h1>
      </span>
      <ul v-show="show" id="header_links">
        <li class="text-gray-200 links" id="home"><a href="">Home</a></li>
        <li class="text-gray-200 links" id="about"><a href="">About</a></li>
        <li class="text-gray-200 links" id="services">
          <a href="">Services</a>
        </li>
        <li class="text-gray-200 links" id="blogs"><a href="">Blogs</a></li>
        <li class="text-gray-200 links" id="contacts">
          <a href="">Contact</a>
        </li>
      </ul>
      <span id="btn" @click="show = !show">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          /></svg
      ></span>
    </header>
    <main>
      <div class="main">
        <!-- intro -->
        <div class="text-gray-200 shadow-md content" id="intro">
          <h2 class="content_name">I'm Noble d Noobie</h2>
          <p>
            Also known as <i>Mod5ied</i> in the tech space, I'm a self taught
            JavaScript developer, technical writer and founder of IboTran.io. I
            help founders craft software solutions using JavaScript tools. I'm
            also an active opensourcer, contributing and also giving out to the
            community wih my creative ideas.
          </p>
          <span>
            <button
              class="flex flex-row justify-center gap-2 text-gray-300 bg-orange-900 border-2 border-orange-900 shadow-xl btnOne"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </button>
            <button
              class="flex flex-row justify-center gap-2 text-gray-300 bg-orange-900 border-2 border-orange-900 shadow-xl btnOne"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact
            </button>
          </span>
        </div>
        <!-- skills -->
        <div class="text-gray-200 shadow-md content" id="skills">
          <h3>Skills</h3>
          <ul id="skills_list" class="h-full">
            <li
              id="list"
              class="flex flex-col items-center justify-between h-full p-2"
            >
              <i> <img src="../assets/engineering.svg" alt="" class="" /> </i>

              <p class="p-2 mb-4 text-gray-300 bg-orange-800 rounded-lg">
                Frontend Development
              </p>
            </li>
            <li
              id="list"
              class="flex flex-col items-center justify-between h-full p-2"
            >
              <i>
                <img src="../assets/frontend.svg" alt="" class="h-3/4" />
              </i>
              <p class="p-2 mb-4 text-gray-300 bg-indigo-700 rounded-lg">
                Backend Development
              </p>
            </li>
          </ul>
        </div>
        <!-- works -->
        <div class="text-gray-200 shadow-md content" id="works">
          <h3>Featured Work (Side-Projects)</h3>
          <ul id="work_list">
            <li class="list">
              <p
                class="absolute p-2 mb-4 text-gray-300 bg-indigo-700 rounded-lg"
              >
                Easybank landing page
              </p>
              <img
                src="../assets/easybank.png"
                alt="Easybank_image"
                class="w-full h-full"
              />
            </li>
            <li class="list">
              <p
                class="absolute p-2 mb-4 text-gray-300 bg-indigo-700 rounded-lg"
              >
                Clearon - Clearance app
              </p>
              <img
                src="../assets/clearon.png"
                alt="Clearon_image"
                class="w-full h-full"
              />
            </li>
            <li class="list">
              <p
                class="absolute p-2 mb-4 text-gray-300 bg-indigo-700 rounded-lg"
              >
                NotesHub
              </p>
              <img
                src="../assets/noteshub.PNG"
                alt="NotesHub_image"
                class="w-full h-full"
              />
            </li>
            <li class="list">
              <p
                class="absolute p-2 mb-4 text-gray-300 bg-indigo-700 rounded-lg"
              >
                Notify - Notification app
              </p>
              <img
                src="../assets/notify.png"
                alt="Notify-image"
                class="w-full h-full"
              />
            </li>
          </ul>
          <a href="www.github.com">See more...</a>
        </div>
        <!-- services -->
        <div class="gap-16 text-gray-200 shadow-md content" id="services">
          <h3>Services</h3>
          <ul id="service_list" class="flex flex-row gap-16 rounded-md">
            <span class="flex flex-col items-center gap-2">
              <li class="text-lg list">Frontend Engineering</li>
              <p class="text-sm">
                I craft and develop interesting and intruiging web applications
                and platforms using various web technologies in my stack: HTML,
                CSS, JavaScript, Vue.js and Nuxt
              </p>
            </span>
            <span class="flex flex-col gap-2">
              <li class="text-lg list">Backend/API development</li>
              <p class="text-sm">
                Being very proficient in the art of building RESTful application
                services is a skill I have developed and honed over the years. I
                also love working with and designing GraphQL APIs with MongoDB
                and Mongoose. <br />
                Security is most assured with SuperTokens - Yes, I am a
                <a href="">SuperTokens</a> ambassador!
              </p>
            </span>
            <span class="flex flex-col gap-2">
              <li class="text-lg list">Technical writing</li>
              <p class="text-sm">
                With practically tested codes and programs, I formulate
                technical articles that also includes my hours of research to
                help ease dev experience. I write on Dev.to and Tealfield.
              </p>
            </span>
          </ul>
        </div>
        <!-- opensource -->
        <div class="text-gray-200 shadow-md content" id="opensource">
          <h3>OpenSource</h3>
          <ul id="open_list">
            <li class="list">SignIn/Up page</li>
            <li class="list">AutoComplete component</li>
            <li class="list">My Portfolio</li>
            <li class="list">IboTrans.io</li>
          </ul>
        </div>
        <!-- articles -->
        <div class="text-gray-200 shadow-md content" id="articles">
          <h3>Popular Articles</h3>
          <ul id="articles_list">
            <li class="article">Req/Res</li>
            <li class="article">Unsplash</li>
            <li class="article">Unsplash2</li>
            <li class="article">EventLoop</li>
          </ul>
          <a href="" class="mr-auto">See more..</a>
        </div>
        <!-- contact -->
        <div class="text-gray-200 shadow-md content" id="contact">
          <h3 class="text-gray-200">Reach out here</h3>
          <ul
            id="contact_list"
            class="flex flex-row justify-between w-2/5 mx-0 my-auto"
          >
            <li class="list">Twitter</li>
            <li class="list">LinkedIn</li>
            <li class="list">Github</li>
          </ul>
        </div>
      </div>
      <!-- The Right side navigation -->
      <section id="main_nav_container" @mousemove="removeAnimateClass">
        <ul id="nav_links">
          <li class="links" id="home">
            <a class="text-gray-200" href="#">Home</a>
            <fulfilling-bouncing-circle-spinner
              :animation-duration="4000"
              :size="20"
              color="#135bbf"
            />
          </li>
          <li class="links" id="about">
            <a class="text-gray-200" href="">About</a>
            <fulfilling-bouncing-circle-spinner
              :animation-duration="4000"
              :size="20"
              color="#135bbf"
            />
          </li>
          <li class="links" id="services">
            <a class="text-gray-200" href="">Services</a>
            <fulfilling-bouncing-circle-spinner
              :animation-duration="4000"
              :size="20"
              color="#135bbf"
            />
          </li>
          <li class="links" id="blogs">
            <a class="text-gray-200" href="">Blogs</a>
            <fulfilling-bouncing-circle-spinner
              :animation-duration="4000"
              :size="20"
              color="#135bbf"
            />
          </li>
          <li class="links" id="contacts">
            <a class="text-gray-200" href="">Contact</a>
            <fulfilling-bouncing-circle-spinner
              :animation-duration="4000"
              :size="20"
              color="#135bbf"
            />
          </li>
        </ul>
      </section>
    </main>
    <footer class="static bottom-0 flex flex-col w-full mt-4">
      <ul
        id="nav_links"
        class="flex flex-row justify-around p-2 text-gray-200 bg-gray-900"
      >
        <li id="home" class="relative mx-auto my-0 right-80">
          <a href="#">Logo</a>
        </li>
        <span id="foot_nav" class="relative flex flex-row gap-6 right-1/3">
          <li class="links" id="about"><a href="">About</a></li>
          <li class="text-gray-200" id="blogs"><a href="">Blogs</a></li>
          <li class="text-gray-200" id="contacts"><a href="">Contact</a></li>
        </span>
        <span
          id="foot_contact"
          class="relative flex flex-row items-center gap-2 right-10"
        >
          <p>Follow me on</p>
          <ul id="foot_contact_icons" class="flex flex-row gap-6 text-2xl">
            <ion-icon name="logo-twitter" class="text-blue-700"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-linkedin" class="text-blue-500"></ion-icon>
          </ul>
        </span>
      </ul>
      <span
        id="foot_attrib"
        class="flex flex-row justify-center w-full gap-3 p-2 text-gray-300 bg-orange-900"
      >
        <p>&copy; Patrick 2022</p>
        <p class="flex items-center gap-1">
          Built with
          <ion-icon name="logo-vue" class="text-lg text-green-600"></ion-icon>
        </p>
        <p class="flex items-center gap-1">
          Opensourced on
          <ion-icon name="logo-github" class="text-lg text-gray-100"></ion-icon>
        </p>
        <p class="flex items-center gap-1">
          Deployed on
          <ion-icon name="logo-vercel" class="text-lg text-gray-800"></ion-icon>
        </p>
      </span>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from "@vue/reactivity";
import "animate.css";
import { FulfillingBouncingCircleSpinner } from "epic-spinners";

const show = ref(false);
const methods = reactive({
  removeAnimateClass: () => {
    document.querySelector("#main_nav_container").style.animation = "none";
  },
});

const { removeAnimateClass } = toRefs(methods);
</script>

<style lang="scss" scoped>
@import "../style/style.scss";
</style>

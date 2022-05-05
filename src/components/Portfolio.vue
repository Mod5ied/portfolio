<template>
  <div id="parent_container" class="bg-gray-800">
    <header
      class="fixed top-0 flex flex-row items-center justify-between w-full h-16 px-12 py-2 bg-gray-900"
    >
      <span class="flex flex-row items-center gap-1" id="header_logo">
        <!-- <img
          src="../assets/me.jpg"
          class="w-20 h-20 rounded-full"
          alt="my_id.png"
        /> -->
        <h2 class="text-xl font-semibold text-slate-400">Ogwuru Patrick</h2>
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
      <span id="btn" @click="show = !show" class="text-gray-200">
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
      <span class="flex items-center gap-4 text-orange-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
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
          />
        </svg>
      </span>
    </header>
    <main>
      <div class="main">
        <!-- intro -->
        <div class="text-gray-200 content" id="intro">
          <p class="w-11/12 px-20 text-slate-300">
            Also known as
            <i class="p-1 font-serif font-medium bg-indigo-700 text-slate-300"
              >Mod5ied</i
            >
            in the tech space, I'm a self taught JavaScript developer, technical
            writer and founder of IboTran.io. I help founders craft software
            solutions using modern software development tools like JavaScript,
            Node.js and Vue amongst others.. I'm also an active in OSS,
            contributing and also giving out to the community wih my creative
            ideas and articles.
          </p>
          <span
            class="flex items-center justify-around w-1/2 gap-4 p-2 mx-auto my-14"
          >
            <span class="flex bg-orange-900">
              <button
                class="btns hover:bg-orange-800 focus:bg-gray-300 focus:text-orange-800"
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
            </span>
            <span class="bg-orange-900">
              <a href="#contact" class="btns hover:bg-orange-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                Contact
              </a></span
            >
          </span>
        </div>
        <!-- skills -->
        <div class="text-gray-200 shadow-md content" id="skills">
          <h3 class="content-h3">Skill-sets and Proficiency</h3>
          <ul id="skills_list" class="skills-list">
            <li
              id="list"
              class="relative flex flex-col items-center justify-between h-full p-2 transition duration-70000"
            >
              <i> <img src="../assets/engineering.svg" alt="" class="" /> </i>

              <p
                @click="tag1 = !tag1"
                class="px-4 py-2 mb-4 text-xs text-gray-300 bg-orange-800 rounded-lg cursor-pointer md:text-base tags"
              >
                Frontend Development
              </p>
              <p
                class="absolute flex items-center px-2 text-xs bg-indigo-700 rounded md:h-20 md:text-sm"
                v-if="tag1"
              >
                I work with these technologies on the frontend: <br />
                Vue.Js, TypeScript, JavaScript, MongoDB, HTML5, CSS3, SASS/SCSS
                & TailwindCSS
              </p>
            </li>
            <li
              id="list"
              class="relative flex flex-col items-center justify-between h-full p-2"
            >
              <i>
                <img src="../assets/frontend.svg" alt="" class="h-3/4" />
              </i>
              <p
                @click="tag2 = !tag2"
                class="px-4 py-2 mb-4 text-xs text-gray-300 bg-indigo-700 rounded-lg cursor-pointer md:text-base tags"
              >
                Backend Development
              </p>
              <p
                class="absolute flex items-center px-4 text-xs bg-gray-500 rounded md:text-sm md:h-20"
                v-if="tag2"
              >
                I'm proficient with Backend technologies like: <br />
                Nuxt.Js, Node.Js, Express, TypeScript with Node, GraphQL,
                Apollo, MongoDB and PostgreSQL
              </p>
            </li>
          </ul>
        </div>
        <!-- works -->
        <div class="text-gray-200 shadow-md content" id="works">
          <h3 class="content-h3">Featured Works:</h3>
          <ul
            class="flex flex-row flex-wrap justify-between w-11/12 gap-3 rounded-sm"
          >
            <li class="work-list">
              <p
                class="absolute px-4 py-2 mb-4 text-sm text-gray-300 bg-indigo-700 rounded-lg"
              >
                Easybank landing page
              </p>
              <img
                src="../assets/easybank.png"
                alt="Easybank_image"
                class="w-full h-full"
              />
            </li>
            <li class="work-list">
              <p
                class="absolute px-4 py-2 mb-4 text-sm text-gray-300 bg-indigo-700 rounded-lg"
              >
                Clearon - Clearance app
              </p>
              <img
                src="../assets/clearon.png"
                alt="Clearon_image"
                class="w-full h-full"
              />
            </li>
            <li class="work-list">
              <p
                class="absolute px-4 py-2 mb-4 text-sm text-gray-300 bg-indigo-700 rounded-lg"
              >
                NotesHub
              </p>
              <img
                src="../assets/noteshub.PNG"
                alt="NotesHub_image"
                class="w-full h-full"
              />
            </li>
            <li class="work-list">
              <p
                class="absolute px-4 py-2 mb-4 text-sm text-gray-300 bg-indigo-700 rounded-lg"
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
          <a
            href="www.github.com"
            class="text-sm hover:text-indigo-600 text-slate-300"
            >See more...</a
          >
        </div>
        <!-- services -->
        <div class="gap-16 text-gray-200 shadow-md content">
          <h3 class="content-h3">Services Rendered</h3>
          <ul id="service_list" class="flex flex-row gap-16 rounded-md h-60">
            <span class="services-span">
              <li class="text-base bg-gray-500 list">Frontend Engineering</li>
              <p class="p-4 text-sm text-slate-300">
                I craft and develop interesting and intruiging web applications
                and platforms using various web technologies in my stack: HTML,
                CSS, JavaScript, Vue.js and Nuxt
              </p>
            </span>
            <span class="services-span">
              <li class="text-base bg-orange-900 list">
                Backend/API development
              </li>
              <p class="p-4 text-sm text-slate-300">
                Being very proficient in the art of building RESTful application
                services is a skill I have developed and honed over the years. I
                also love working with and designing GraphQL APIs. <br />
                Security is assured with SuperTokens - Yes, I am a
                <a href="">SuperTokens</a> ambassador!
              </p>
            </span>
            <span class="services-span">
              <li class="text-base bg-indigo-700 list">Technical writing</li>
              <p class="p-4 text-sm text-slate-300">
                With practically tested codes and programs, I formulate
                technical articles that also includes my hours of research to
                help ease dev experience. I write for passion and for developers
                on Dev.to.
              </p>
            </span>
          </ul>
        </div>
        <!-- articles -->
        <div class="w-full text-gray-200 shadow-md content">
          <h3 class="content-h3">Popular Articles</h3>
          <ul
            id="articles_list"
            class="flex flex-col justify-around w-full gap-8 p-2"
          >
            <li class="article-btn1">
              Introduction to Request and Response in JavaScript
            </li>
            <li class="article-btn2">
              Intro to making API requests (Unsplash API)
            </li>
            <li class="article-btn1">
              Intro to making API requests (Unsplash API)2
            </li>
            <li class="article-btn2">Node.Js EventLoop Demystified</li>
          </ul>
          <a href="" class="text-sm hover:text-indigo-600">See more..</a>
        </div>
        <!-- contact -->
        <div
          class="flex w-full h-48 mx-0 my-auto text-gray-200 shadow-md content"
          id="contact"
        >
          <h3 class="content-h3">Reach out to me here:</h3>
          <ul
            id="contact_list"
            class="flex flex-row justify-between w-2/5 gap-4 mx-0 my-auto text-sm"
          >
            <a
              href="#"
              class="w-3/5 p-2 transition duration-300 border border-gray-700 list hover:bg-blue-700 hover:text-gray-200"
            >
              Twitter
            </a>
            <a
              href="#"
              class="w-3/5 p-2 transition duration-300 border border-gray-600 list hover:bg-blue-500 hover:text-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              class="w-3/5 p-2 transition duration-300 border border-gray-600 list hover:bg-gray-300 hover:text-gray-700"
            >
              Github
            </a>
            <a
              href="#"
              class="w-3/5 p-2 transition duration-300 border border-gray-600 list hover:bg-green-500 hover:text-gray-200"
            >
              WhatsApp
            </a>
          </ul>
        </div>
      </div>
    </main>
    <footer class="static bottom-0 flex flex-col w-full mt-4">
      <ul
        id="nav_links"
        class="flex flex-row justify-end gap-10 px-16 py-2 text-gray-200 bg-gray-900"
      >
        <!-- <li id="home" class="relative mx-auto my-0 right-80">
          <img src="../assets/ME.jpg" class="w-8 h-8 rounded-full" alt="" />
        </li> -->
        <span id="relative foot_nav" class="flex flex-row gap-6 text-sm">
          <li class="links md:hover:text-indigo-700" id="about">
            <a href="">About</a>
          </li>
          <!-- <li class="text-gray-200 hover:text-indigo-700" id="blogs">
            <a href="">Blogs</a>
          </li> -->
          <li class="text-gray-200 hover:text-indigo-700" id="contacts">
            <a href="">Contact</a>
          </li>
        </span>
      </ul>
      <span
        id="foot_attrib"
        class="flex flex-row justify-center w-full gap-5 px-16 py-2 text-gray-300 bg-orange-700 md:justify-between"
      >
        <span
          id="foot_contact"
          class="relative flex flex-row items-center gap-2"
        >
          <p class="text-sm">Follow me on</p>
          <ul
            id="foot_contact_icons"
            class="flex flex-row items-center gap-6 text-2xl"
          >
            <ion-icon
              name="logo-twitter"
              class="text-base text-blue-700"
            ></ion-icon>
            <ion-icon name="logo-github" class="text-base"></ion-icon>
            <ion-icon
              name="logo-linkedin"
              class="text-base text-blue-500"
            ></ion-icon>
          </ul>
        </span>
        <!-- Right hand side -->
        <div class="flex flex-row items-center gap-2">
          <p class="text-sm">&copy; Patrick 2022</p>
          <p class="flex items-center gap-1 text-sm">
            Built with
            <ion-icon name="logo-vue" class="text-lg text-green-600"></ion-icon>
          </p>
          <p class="flex items-center gap-1 text-sm">
            Opensourced on
            <ion-icon
              name="logo-github"
              class="text-lg text-gray-100"
            ></ion-icon>
          </p>
          <p class="flex items-center gap-1 text-sm">
            Deployed on
            <ion-icon
              name="logo-vercel"
              class="text-lg text-gray-800"
            ></ion-icon>
          </p>
        </div>
      </span>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from "@vue/reactivity";

const tag1 = ref(false);
const tag2 = ref(false);
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

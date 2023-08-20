<template>
  <div class="bg-gradient">
    <!-- nav -->
    <div class="drawer bg-transparent">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-transparent">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">
            <RouterLink to="/">
              <img class="" src="./assets/logo.svg" alt="Logo Ana Laura" srcset="" />
            </RouterLink>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <li>
                <RouterLink
                  class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
                  to="/"
                  >Home</RouterLink
                >
              </li>
              <li>
                <a
                  class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
                  :href="homesStore.resume"
                  target="_blank"
                  >Currículo</a
                >
              </li>
              <li>
                <RouterLink
                  class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
                  to="/projetos"
                  >Projetos</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
                  to="/about"
                  >Contato</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->

        <!-- ROUTER VIEW -->
        <RouterView />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 h-full bg-pink">
          <!-- Sidebar content here -->
          <li>
            <RouterLink
              class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
              to="/"
              >Home</RouterLink
            >
          </li>
          <li>
            <a
              class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
              :href="homesStore.resume"
              target="_blank"
              >Currículo</a
            >
          </li>
          <li>
            <RouterLink
              class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
              to="/projetos"
              >Projetos</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="font-poppins text-lg text-black font-semibold capitalize hover:italic hover:text-pink hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-pink active:text-pink"
              to="/about"
              >Contato</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import { mapStores } from 'pinia'
import useHomesStore from '@/stores/home.js'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {}
  },
  computed: {
    ...mapStores(useHomesStore)
  },
  mounted() {}
}
</script>

<style lang="scss">
.bg-gradient {
  background-image: url(./assets/main-gradient-bg.png);
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: scroll;
}

.transition-custom {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item-p:active {
  color: #ff006b;
  background-color: transparent;
  border: none;
  outline: none;
}

.menu-item-p:focus {
  color: #ff006b !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
}

.menu-item-p:hover {
  color: #ff006b;
  background-color: transparent;
  border: none;
  outline: none;
}

.font-lexend {
  letter-spacing: -10.44px;
}

.w-cem {
  width: 100%;
}
.max-w-70 {
  max-width: 70%;
}

@media (max-width: 680px) {
  .font-lexend {
    letter-spacing: -4.44px;
  }
}
</style>

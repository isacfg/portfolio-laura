<template>
  <div class="container max-md:px-8 mx-auto mt-14 flex-col flex items-center">
    <!-- my name is laura -->
    <div class="flex flex-col items-center gap-y-6">
      <img v-motion-pop src="../assets/laura.png" alt="Foto de Laura" srcset="" />
      <h1 v-motion-pop class="font-bold text-black text-4xl text-center">
        {{ aboutsStore.aboutTitle
        }}<span class="italic text-pink">{{ aboutsStore.aboutSpan }}</span>
      </h1>
    </div>

    <!-- about me -->
    <div class="flex flex-col justify-around items-center gap-y-12 mt-14">
      <p v-motion-pop-visible class="text-black text-lg w-1/2 mx-auto max-md:w-auto">
        {{ aboutsStore.aboutMe }}
      </p>

      <div class="w-1/2 mx-auto flex flex-wrap gap-y-6 max-md:w-auto">
        <!-- vfor -->
        <div
          v-motion-pop-visible
          class="w-1/2 mx-auto max-md:w-auto"
          v-for="curso in aboutsStore.aboutCursos">
          <p class="text-black text-lg font-bold">
            {{ curso.cursoTitle }}
          </p>
          <p class="text-black text-lg">
            {{ curso.cursoDate }}
          </p>
        </div>

        <!-- <div v-motion-pop-visible class="w-1/2 mx-auto">
          <p class="text-black text-lg font-bold">Bacharelado em Ciência e Tecnologia, UFRN</p>
          <p class="text-black text-lg">Jun 2021 / Cursando</p>
        </div>
        <div v-motion-pop-visible class="w-1/2 mx-auto">
          <p class="text-black text-lg font-bold">Bacharelado em Ciência e Tecnologia, UFRN</p>
          <p class="text-black text-lg">Jun 2021 / Cursando</p>
        </div>
        <div class="w-1/2 mx-auto">
          <p class="text-black text-lg font-bold">Bacharelado em Ciência e Tecnologia, UFRN</p>
          <p class="text-black text-lg">Jun 2021 / Cursando</p>
        </div>
        <div class="w-1/2 mx-auto">
          <p class="text-black text-lg font-bold">Bacharelado em Ciência e Tecnologia, UFRN</p>
          <p class="text-black text-lg">Jun 2021 / Cursando</p>
        </div> -->
      </div>
    </div>
    <!-- fim about me -->
  </div>

  <!-- mande uma mensagem -->
  <Contact />
</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import Contact from '../components/Contact.vue'

import { mapStores } from 'pinia'
import useHomesStore from '@/stores/home.js'
import useAboutsStore from '@/stores/about.js'

export default {
  name: 'AboutView',
  components: {
    ContactCard,
    Contact
  },
  computed: {
    ...mapStores(useHomesStore, useAboutsStore)
  }
}
</script>

<style lang="scss" scoped></style>

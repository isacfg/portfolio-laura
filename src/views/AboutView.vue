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
  <div class="bg-gradient-reverse h-screen">
    <div class="container mx-auto mt-28 flex flex-col items-center">
      <h2
        v-motion-pop-visible
        class="text-center text-black text-6xl max-md:text-5xl font-bold uppercase font-lexend">
        VAMOS<br />
        CONVERSAR?
      </h2>

      <div class="flex flex-col w-3/4 mx-auto items-center gap-y-12 max-md:gap-y-6 mt-12">
        <div
          class="flex max-md:flex-col max-md:justify-center max-md:items-center flex-row justify-evenly w-cem max-md:gap-y-6">
          <ContactCard
            v-motion-slide-visible-bottom
            :socialMediaLink="homesStore.socialMediaOne.link"
            :socialMediaTitle="homesStore.socialMediaOne.name"
            :socialMediaAt="homesStore.socialMediaOne.at" />
          <ContactCard
            v-motion-slide-visible-bottom
            :socialMediaLink="homesStore.socialMediaTwo.link"
            :socialMediaTitle="homesStore.socialMediaTwo.name"
            :socialMediaAt="homesStore.socialMediaTwo.at" />
        </div>
        <div
          class="flex max-md:flex-col max-md:justify-center max-md:items-center flex-row justify-evenly w-cem max-md:gap-y-6">
          <ContactCard
            v-motion-slide-visible-bottom
            :socialMediaLink="homesStore.socialMediaThree.link"
            :socialMediaTitle="homesStore.socialMediaThree.name"
            :socialMediaAt="homesStore.socialMediaThree.at" />
          <ContactCard
            v-motion-slide-visible-bottom
            :socialMediaLink="homesStore.socialMediaFour.link"
            :socialMediaTitle="homesStore.socialMediaFour.name"
            :socialMediaAt="homesStore.socialMediaFour.at" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import { mapStores } from 'pinia'
import useHomesStore from '@/stores/home.js'
import useAboutsStore from '@/stores/about.js'

export default {
  name: 'AboutView',
  components: {
    ContactCard
  },
  computed: {
    ...mapStores(useHomesStore, useAboutsStore)
  }
}
</script>

<style lang="scss" scoped></style>

<template>
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
            type="behance"
            v-motion-slide-visible-bottom
            :socialMediaLink="homesStore.socialMediaOne.link"
            :socialMediaTitle="homesStore.socialMediaOne.name"
            :socialMediaAt="homesStore.socialMediaOne.at" />
          <ContactCard
            type="instagram"
            v-motion-slide-visible-bottom
            :socialMediaLink="homesStore.socialMediaTwo.link"
            :socialMediaTitle="homesStore.socialMediaTwo.name"
            :socialMediaAt="homesStore.socialMediaTwo.at" />
        </div>
        <div
          class="flex max-md:flex-col max-md:justify-center max-md:items-center flex-row justify-evenly w-cem max-md:gap-y-6">
          <ContactCard
            type="curriculo"
            v-motion-slide-visible-bottom
            :socialMediaLink="homesStore.socialMediaThree.link"
            :socialMediaTitle="homesStore.socialMediaThree.name"
            :socialMediaAt="homesStore.socialMediaThree.at" />
          <ContactCard
            type="gmail"
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
import ContactCard from '@/components/ContactCard.vue'
import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects.js'
import useHomesStore from '@/stores/home.js'

export default {
  name: 'Contact',
  components: {
    ContactCard
  },
  computed: {
    ...mapStores(useHomesStore, useProjectsStore)
  }
}
</script>

<style lang="scss" scoped></style>

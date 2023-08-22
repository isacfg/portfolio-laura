<template>
  <!-- hero -->
  <div class="container max-md:px-8 mx-auto mt-28">
    <div class="flex hero-p flex-col mx-auto items-center">
      <h1
        v-motion-pop
        class="text-center font-lexend font-bold uppercase text-6xl text-black max-md:text-4xl">
        {{ homesStore.heroTitle }}
      </h1>
      <div
        v-motion-pop
        class="scrolling-text-outer-container max-w-70 bg-pink p-3 overflow-hidden rounded-xl mt-8">
        <div class="scrolling-text-inner-container">
          <template v-for="line in homesStore.heroSubtitle">
            <h2
              class="text-center text-white max-md:text-4xl font-lexend font-bold uppercase text-6xl">
              {{ line }}
            </h2>
            <img src="../assets/star.svg" alt="" srcset="" />
          </template>
        </div>
      </div>

      <!-- banners -->
      <div v-motion-slide-bottom class="mt-36">
        <img src="../assets/banners.png" alt="" srcset="" />
      </div>
    </div>
  </div>

  <!-- scrolling gallery -->
  <div class="scrolling-gallery-container">
    <img class="w-cem" src="../assets/wave-1.svg" alt="" />
    <div class="scrolling-gallery bg-pink">
      <!-- scrolling gallery with 3 rows and min 5 collumns visible or partially visible, odd rows should go left -->
      <div class="gallery-row odd">
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl rounded transition-custom"
          src="../assets/design-temp-assets/bark-burger/1.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/design/contrabaixo.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/bark-burger/2.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/design/kaio.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/design/carnaval.png"
          alt=""
          srcset="" />
      </div>
      <div class="gallery-row">
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/design/taylor.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/design/canto.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/bark-burger/3.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/design/matias.png"
          alt=""
          srcset="" />
        <img
          v-motion-pop-visible-once
          class="gallery-item hover:rounded-3xl transition-custom"
          src="../assets/design-temp-assets/design/identidadefila.png"
          alt=""
          srcset="" />
      </div>
    </div>
    <img class="w-cem" src="../assets/wave-2.svg" alt="" />
  </div>

  <!-- static gallery -->
  <div id="projetos" class="grid-container mt-14">
    <div class="card-t grid-item card-pessoa-1">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Recital de Música</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-2">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Recital de Turma de Contrabaixo</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-3">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Dia das Mulheres EMUFRN</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-4">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Espaço Cultural Ruy Pereira</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-5">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Recital Matias de Oliveira</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-6">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Recital de Classe de Contrabaixo</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-7">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Bark Burguers - UFRN</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-8">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Taylor Swift Concept</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
    <div class="card-t grid-item card-pessoa-9">
      <div class="card-t-bg">
        <div class="card-t-block">
          <h3 class="card-t-title">Anúncio período de recitais</h3>
          <p class="card-t-text">2023</p>
        </div>
      </div>
    </div>
  </div>

  <!-- mande uma mensagem -->
  <Contact />
</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import Contact from '../components/Contact.vue'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects.js'
import useHomesStore from '@/stores/home.js'

export default {
  name: 'HomeView',
  components: {
    ContactCard,
    Contact
  },
  props: {
    bgPink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useHomesStore, useProjectsStore)
  }
}
</script>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.scrolling-text-inner-container {
  animation: scroll-left 10s linear infinite;
  grid-column-gap: 26px;
  color: #fff;
  white-space: nowrap;
  align-items: center;
  display: flex;
}

.scrolling-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: nowrap;
  max-width: 100vw;
  overflow: hidden;
}

.gallery-item {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.gallery-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
}

/* css gallery grid */

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
  width: 100%;
}

/* .grid-item {
  height: 200px;
} */

.card-t {
  display: block;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  color: white;
  height: 440px;

  cursor: pointer;
}

.card-t::after {
  content: '';
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  width: auto;
  height: 100%;
}

.card-t-title {
  padding: 0 16px;
  color: #e1e1e1;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  /* 80% */
  text-transform: uppercase;

  margin-bottom: 10px;
}

.card-t-block {
  text-align: center;
  padding: 16px;
  margin-top: 40%;
}

.card-t-bg {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: #ff006aa6;
  transition: 0.4s ease;
}

.card-t-text {
  color: #e1e1e1;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 80% */
  text-transform: uppercase;
}

.card-t:hover {
  box-shadow: 0 28px 40px -12px rgba(0, 0, 0, 0.24);
  /* transform: scale(1.05); */
}

.card-t:hover .card-t-bg {
  opacity: 1;
}

.card-t:hover ::after {
  opacity: 0;
}

/* card photos here */

.card-pessoa-1 {
  background: url('../assets/design-temp-assets/design/kaio.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-2 {
  background: url('../assets/design-temp-assets/design/contrabaixo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-3 {
  background: url('../assets/design-temp-assets/design/mulher.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-4 {
  background: url('../assets/design-temp-assets/design/hip.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-5 {
  background: url('../assets/design-temp-assets/design/matias.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-6 {
  background: url('../assets/design-temp-assets/design/airton.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-7 {
  background: url('../assets/design-temp-assets/bark-burger/4.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-8 {
  background: url('../assets/design-temp-assets/design/taylor.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-9 {
  background: url('../assets/design-temp-assets/design/PostFimRecitais.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-10 {
  background: url('../assets/design-temp-assets/design/taylor.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-11 {
  background: url('../assets/design-temp-assets/design/taylor.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-pessoa-12 {
  background: url('../assets/design-temp-assets/design/taylor.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media (max-width: 680px) {
  .scrolling-text-outer-container {
    max-width: 300px;
  }

  .grid-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, auto);
  }

  .gallery-item {
    width: 150px;
    height: 150px;
  }
}
</style>

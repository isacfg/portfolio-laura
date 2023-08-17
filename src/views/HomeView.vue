<template>
  <!-- hero -->
  <div class="container mx-auto mt-28">
    <div class="hero-p flex flex-col mx-auto items-center">
      <h1 class="text-center font-lexend font-bold uppercase text-6xl">DESIGNER DE</h1>
      <div
        class="scrolling-text-outer-container max-w-70 bg-pink p-3 overflow-hidden rounded-xl mt-8">
        <div class="scrolling-text-inner-container">
          <h1 class="text-center text-white font-lexend font-bold uppercase text-6xl">
            SOCIAL MEDIA
          </h1>
          <img src="../assets/star.svg" alt="" srcset="" />
          <h1 class="text-center text-white font-lexend font-bold uppercase text-6xl">
            UI/UX DESIGNER
          </h1>
          <img src="../assets/star.svg" alt="" srcset="" />
          <h1 class="text-center text-white font-lexend font-bold uppercase text-6xl">
            BRAND DESIGNER
          </h1>
        </div>
      </div>

      <!-- banners -->
      <div class="mt-36">
        <img src="../assets/banners.png" alt="" srcset="" />
      </div>
    </div>
  </div>

  <!-- scrolling gallery -->
  <div class="scrolling-gallery-container">
    <img src="../assets/wave-1.svg" alt="" class="" />
    <div class="scrolling-gallery bg-pink">
      <!-- scrolling gallery with 3 rows and min 5 collumns visible or partially visible, odd rows should go left -->

      <div class="gallery-row odd">
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
      </div>
      <div class="gallery-row">
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
        <img class="gallery-item" src="../assets/placeholder-gallery.png" alt="" srcset="" />
      </div>
    </div>
    <img src="../assets/wave-2.svg" alt="" class="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.max-w-70 {
  max-width: 70%;
}

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
  grid-column-gap: 16px;
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
}
</style>

<template>
  <div
    class="card-contact flex gap-24 justify-between items-center hover:bg-pink transition-custom">
    <div>
      <p class="font-poppins text-2xl font-bold capitalize text-black">{{ socialMediaTitle }}</p>
      <p class="font-poppis font-medium text-slate-500">{{ socialMediaAt }}</p>
    </div>
    <div>
      <img src="../assets/placeholder-social-media.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactCard',
  props: {
    // props
    socialMediaTitle: {
      type: String,
      required: true
    },
    socialMediaAt: {
      type: String,
      required: true
    }
  },
  components: {
    // components
  },
  data() {
    return {
      // data
    }
  }
}
</script>

<style scoped>
.card-contact {
  border-top: 2px solid var(--black, #0a0430);
  padding: 10px 0;
  max-width: 270px;
}

.card-contact:hover {
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
}

.card-contact:hover p {
  color: #f9f9f9;
}
</style>

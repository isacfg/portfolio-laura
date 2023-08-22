<template>
  <div
    @click="openLinkInNewTab(socialMediaLink)"
    class="card-contact cursor-pointer flex w-60 justify-between items-center hover:bg-pink transition-custom">
    <div>
      <p class="font-poppins text-2xl font-bold capitalize text-black">{{ socialMediaTitle }}</p>
      <p class="font-poppis font-medium text-slate-500">{{ socialMediaAt }}</p>
    </div>
    <div>
      <img v-if="type == 'behance'" src="../assets/icons/behance.svg" alt="" srcset="" />
      <img v-if="type == 'instagram'" src="../assets/icons/instagram.svg" alt="" srcset="" />
      <img v-if="type == 'curriculo'" src="../assets/icons/mail.svg" alt="" srcset="" />
      <img v-if="type == 'gmail'" src="../assets/icons/gmail.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
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
    },
    socialMediaLink: {
      type: String,
      required: true
    },
    type: {
      type: String
    }
  },
  components: {
    // components
  },
  data() {
    return {
      // data
    }
  },
  methods: {
    openLinkInNewTab(url) {
      window.open(url, '_blank')
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

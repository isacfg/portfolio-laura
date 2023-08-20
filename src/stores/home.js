import { defineStore } from 'pinia'


export default defineStore('homes', {
  state: () => ({
    resume: 'https://drive.google.com/file/d/1-3r8xZ2bAcQ2lABl0Xv572TWA-PFFox-/view?usp=sharing',
    heroTitle: 'DESIGNER DE',
    heroSubtitle: {
      line1: 'SOCIAL MEDIA',
      line2: 'UI/UX DESIGNER',
      line3: 'BRAND DESIGNER',
      line4: 'SOCIAL MEDIA',
    },
    socialMediaOne: {
      name: 'Behance',
      link: 'https://www.instagram.com/',
      at: '@laura',
    },
    socialMediaTwo: {
      name: 'Instagram',
      link: 'https://www.instagram.com/',
      at: '@laura',
    },
    socialMediaThree: {
      name: 'Curriculo',
      link: 'https://www.instagram.com/',
      at: '@laura',
    },
    socialMediaFour: {
      name: 'Email',
      link: 'https://www.instagram.com/',
      at: '@laura',
    },

  }),
  actions: {
    setHome(home) {
      this.home = home
    },
  }
})
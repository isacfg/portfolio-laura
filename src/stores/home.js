import { defineStore } from 'pinia'


export default defineStore('homes', {
  state: () => ({
    resume: 'https://drive.google.com/file/d/1-MYqvn0dy4EKYniq_8dvUdaJXq-8Lj_B/view?usp=sharing',
    heroTitle: 'DESIGNER DE',
    heroSubtitle: {
      line1: 'SOCIAL MEDIA',
      line2: 'UI/UX DESIGNER',
      line3: 'BRAND DESIGNER',
      line4: 'SOCIAL MEDIA',
    },
    socialMediaOne: {
      name: 'Behance',
      link: 'https://www.instagram.com/anlaurr/',
      at: '@anlaurr',
    },
    socialMediaTwo: {
      name: 'Instagram',
      link: 'https://www.instagram.com/anlaurr/',
      at: '@anlaurr',
    },
    socialMediaThree: {
      name: 'Curriculo',
      link: 'https://drive.google.com/file/d/1-MYqvn0dy4EKYniq_8dvUdaJXq-8Lj_B/view?usp=sharing',
      at: 'Ana Laura ',
    },
    socialMediaFour: {
      name: 'Email',
      link: '',
      at: '',
    },

  }),
  actions: {
    setHome(home) {
      this.home = home
    },
  }
})
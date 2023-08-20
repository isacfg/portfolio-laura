import { defineStore } from 'pinia'


export default defineStore('abouts', {
  state: () => ({
    resume: 'https://drive.google.com/file/d/1-3r8xZ2bAcQ2lABl0Xv572TWA-PFFox-/view?usp=sharing',
    aboutTitle: 'meu nome é ',
    aboutSpan: 'nala 👋😊',
    aboutMe: "  Desenvolvedor frontend especializado em Vue.js. Comecei a minha carreira como desenvolvedor web há mais de 3 anos e, desde então, tenho me dedicado ao desenvolvimento de sites e sistemas utilizando tecnologias como HTML, CSS, JavaScript e frameworks como o Bootstrap, Bulma e Tailwind.",
    aboutCursos: [
      {
        cursoTitle: 'Bacharelado1 em Ciência e Tecnologia, UFRN',
        cursoDate: 'Jun 2021 / Cursando',
      },
      {
        cursoTitle: 'Bacharelado2 em Ciência e Tecnologia, UFRN',
        cursoDate: 'Jun 2021 / Cursando',
      },
      {
        cursoTitle: 'Bacharelado3 em Ciência e Tecnologia, UFRN',
        cursoDate: 'Jun 2021 / Cursando',
      },
      {
        cursoTitle: 'Bacharelado 4em Ciência e Tecnologia, UFRN',
        cursoDate: 'Jun 2021 / Cursando',
      },
    ]

  }),
  actions: {
    setAbout(about) {
      this.about = about
    },
  }
})
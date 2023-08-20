import { defineStore } from 'pinia'


export default defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'Bark Burguers',
        subtitle: 'Escola de Música - UFRN',
        description: 'descricao do projeto 1',
        image: '/src/assets/placeholder-gallery.png',
        linkDemo: 'https://google.com',
        linkGithub: 'https://google.com',
        linkBehance: 'https://bing.com',
      },

    ],
  }),
  actions: {
    setProjects(projects) {
      this.projects = projects
    },
  }
})
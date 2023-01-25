import Prismic from '@prismicio/client'

export const repositoryName = 'ignewsrpm'

export const client = Prismic.createClient(repositoryName, {
  
  accessToken: process.env.PRISMIC_ACESS_TOKEN,

  routes: [
    {
      type: 'homepage',
      path: '/',
    },
  ],
})
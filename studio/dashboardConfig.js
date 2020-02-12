export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e43a84702ea5bbcef3bcc57',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-itgf8yi3',
                  apiId: 'fca3fc4b-6f3d-4349-b3bd-622c63909cf6'
                },
                {
                  buildHookId: '5e43a8484fb75d7519d5bf6c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jt3bgqii',
                  apiId: '8200a30f-fd63-4cad-90e2-efa7db114026'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timosaikkonen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jt3bgqii.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

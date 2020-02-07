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
                  buildHookId: '5e3d57491725279aac246921',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-odhkkuoy',
                  apiId: 'cda93917-73df-4ee4-9f2a-addf431d036f'
                },
                {
                  buildHookId: '5e3d574981066fd3354d05a7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-type9s1n',
                  apiId: '1001d09f-b4f8-4e92-9f95-bf5851ea03ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NatalyMac/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-type9s1n.netlify.com',
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

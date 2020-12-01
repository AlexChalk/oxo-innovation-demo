export default {
  widgets: [
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
                  buildHookId: '5fc6685f4acc3300965ca441',
                  title: 'Sanity Studio',
                  name: 'oxo-innovation-demo-studio',
                  apiId: '6c8441d0-652b-4523-95f0-0b4f5b4ae7d6'
                },
                {
                  buildHookId: '5fc6685f9f20b100e0cd6176',
                  title: 'Blog Website',
                  name: 'oxo-innovation-demo',
                  apiId: 'db01289e-fbf0-46c4-9ea8-946f5ce7fd1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexChalk/oxo-innovation-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://oxo-innovation-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

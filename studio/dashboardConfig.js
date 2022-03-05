export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6222a9a3746bad00a3fc50f9',
                  title: 'Sanity Studio',
                  name: 'sanity-studio-hvxg8h68',
                  apiId: 'aa1258b4-d73c-428c-b4a7-89214d8941f4'
                },
                {
                  buildHookId: '6222a9a37b67aa00b548565b',
                  title: 'Landing pages Website',
                  name: 'sanity-web-v4auhibm',
                  apiId: 'ca66162a-00d0-4386-8858-5418f67e33e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emmanpsd/sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-web-v4auhibm.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

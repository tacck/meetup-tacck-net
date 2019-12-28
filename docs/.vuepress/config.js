const moment = require('moment')

module.exports = {
    title: 'Meetup.Tacck.NET',
    description: 'meetup.tacck.net',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
        ]
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-89701884-5'
            }
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).format('YYYY-MM-DD HH:mm:SS')
                }
            }
        ],
        [
            'sidebar',
            {
                postItems: [
                    ['https://www.tacck.net/', 'Tacck.NET'],
                    ['https://blog.tacck.net', 'Tech Blog']
                ]
            }
        ]
    ]
}

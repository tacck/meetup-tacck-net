const moment = require('moment')

module.exports = {
    title: 'Meetup.Tacck.NET',
    description: 'meetup.tacck.net',
    ga: 'UA-89701884-5',
    themeConfig: {
        lastUpdated: 'Last Updated (JST)',
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebarDepth: 1,
        sidebar: [
            ['/mildweb', 'ゆるWeb勉強会@札幌'],
            ['/smaspi', 'スマートスピーカーで遊ぼう会@札幌'],
            ['https://www.tacck.net', 'Tacck.NET'],
            ['https://blog.tacck.net', 'Tech Blog']
        ]
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    const moment = require('moment')
                    moment.locale('ja-JP')
                    return moment(timestamp).format('YYYY-MM-DD HH:mm:SS')
                }
            }
        ]
    ]
}

({
    block: 'b-page',
    title: 'заголовок',
    head: [
        {
            elem: 'css',
            url: '_50-perscreen-nonfirst_bem.css'
        },
        {
            elem: 'css',
            ie: true,
            url: '_50-perscreen-nonfirst_bem.ie.css'
        },
        {
            block: 'i-jquery',
            elem: 'core'
        },
        {
            elem: 'js',
            url: '_50-perscreen-nonfirst_bem.pub.js'
        },
        {
            elem: 'css',
            content: '.b-test-block { background: #eee; padding: 20px 0 10px }'
        }
    ],
    content: {
        block: 'b-slider',
        js: {
            index: 2
        },
        mods: {
            type: 'per-screen'
        },
        mix: [
            {
                block: 'b-slider-indicator',
                js: true
            },
            {
                block: 'b-slider-arrows',
                js: true
            },
            {
                block: 'b-my-slider'
            }
        ],
        content: {
            block: 'b-menu',
            mods: {
                layout: 'horiz'
            },
            content: [
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Я.Слайдер! 1'
                    }
                },{
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Уиии! Я.Слайдер! 2'
                    }
                },{
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Я.Слайдер Я.Слайдер! 3'
                    }
                },{
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Я.Слайдер 4'
                    }
                },{
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Я.Слайдер! 5'
                    }
                },{
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Уиии! Я.Слайдер! 6'
                    }
                },{
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Я.Слайдер Я.Слайдер! 7'
                    }
                },{
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: 'http://ya.ru',
                        content: 'Я.Слайдер 8'
                    }
                }
            ]
        }
     }
})

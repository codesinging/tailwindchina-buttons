const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
    const defaultSize = theme('buttonSizes.DEFAULT', ['2.5rem', '1.5rem', '16px'])
    addComponents({
        '.btn': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: defaultSize[0],
            paddingLeft: defaultSize[1],
            paddingRight: defaultSize[1],
            fontSize: defaultSize[2],
            color: theme('colors.white'),
            borderRadius: theme('borderRadius.DEFAULT'),
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150ms',
            '&:focus': {
                outline: 'none',
            }
        }
    })

    theme('buttonColors').forEach(color => {
        addComponents({
            [`.btn-${color}`]: {
                backgroundColor: theme(`colors.${color}.500`),
                '&:hover': {
                    backgroundColor: theme(`colors.${color}.400`)
                },
                '&:active': {
                    backgroundColor: theme(`colors.${color}.600`)
                }
            }
        })
    })

    Object.keys(theme('buttonSizes')).forEach(size => {
        if(size!=='DEFAULT'){
            addComponents({
                [`.btn-${size}`]: {
                    height: theme('buttonSizes')[size][0],
                    paddingLeft: theme('buttonSizes')[size][1],
                    paddingRight: theme('buttonSizes')[size][1],
                    fontSize: theme('buttonSizes')[size][2],
                }
            })
        }
    })

}, {
    theme: {
        buttonColors: [
            'gray',
            'red',
            'yellow',
            'green',
            'blue',
            'indigo',
            'purple',
            'pink'
        ],
        buttonSizes: {
            xs: ['1.5rem', '0.5rem', '12px'],
            sm: ['2rem', '1rem', '14px'],
            DEFAULT: ['2.5rem', '1.5rem', '16px'],
            lg: ['3rem', '2rem', '18px'],
            xl: ['3.5rem', '2.5rem', '20px'],
        },
    }
})
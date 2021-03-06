# tailwindchina-buttons

A TailwindCSS plugin that provides a set of button components based on the TailwindCSS palette.

![tailwindchina-buttons](https://tva1.sinaimg.cn/large/008eGmZEly1gn3so5hkf5j31ms080q47.jpg)

## Installation

Install the plugin from npm:

    # Using npm
    npm install tailwindchina-buttons

    # Using yarn
    yarn add tailwindchina-buttons

The add the plugin to your `tailwind.config.js` file:

    // tailwind.config.js
    module.exports = {
        theme: {
            // ...
        },
        plugins: [
            require('tailwindchina-buttons')
        ],
    }

## Usage

Apply the `btn btn-{color}` utilities to `button` or `a` element.

### Colors

By default, this plugin provides 8 colors of button components corresponding to the TailwindCSS's default color palette.

They are gray, red, yellow, green, blue, indigo, purple, pink.

    <button class="btn btn-gray">btn-gray</button>
    <button class="btn btn-red">btn-red</button>
    <button class="btn btn-yellow">btn-yellow</button>
    <button class="btn btn-green">btn-green</button>
    <button class="btn btn-blue">btn-blue</button>
    <button class="btn btn-indigo">btn-indigo</button>
    <button class="btn btn-purple">btn-purple</button>
    <button class="btn btn-pink">btn-pink</button>

    <a href="#" class="btn btn-gray">btn-gray</a>
    <a href="#" class="btn btn-red">btn-red</a>
    <a href="#" class="btn btn-yellow">btn-yellow</a>
    <a href="#" class="btn btn-green">btn-green</a>
    <a href="#" class="btn btn-blue">btn-blue</a>
    <a href="#" class="btn btn-indigo">btn-indigo</a>
    <a href="#" class="btn btn-purple">btn-purple</a>
    <a href="#" class="btn btn-pink">btn-pink</a>

### Sizes

This plugin provides 5 sizes by default. Besides the default size, you can use the `btn-{xs/sm/lg/xl}` utility class to specify different sizes.

    <button class="btn btn-gray btn-xs">btn-xs</button>
    <button class="btn btn-red btn-sm">btn-sm</button>
    <button class="btn btn-yellow">default size</button>
    <button class="btn btn-green btn-lg">btn-lg</button>
    <button class="btn btn-blue btn-xl">btn-xl</button>

## Configuration

You can configure which button components will be generated in the `buttonColors` section of the `tailwind.config.js` file.

    module.exports = {
        theme: {
            buttonColors: [
                'red',
                'green',
                'yellow',
            ],
        },
    }

You can also configure which size utilities are generated in the `buttonSizes` section of the `tailwind.config.js` file.

    module.exports = {
        theme: {
            buttonSizes: {
                xs: ['1.5rem', '0.5rem', '12px'],
                sm: ['2rem', '1rem', '14px'],
                DEFAULT: ['2.5rem', '1.5rem', '16px'],
                lg: ['3rem', '2rem', '18px'],
                xl: ['3.5rem', '2.5rem', '20px'],
            },
        },
    }

## License

MIT

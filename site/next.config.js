const fs = require('fs')
const path = require('path')

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: [/node_modules[\\\/]@next/, /node_modules[\\\/]next/],
      use: [
        {
          loader: require.resolve('source-map-loader'),
        },
      ],
    })

    config.module.rules.push({
      test: /\.tsx?$/,
      include: [path.resolve(__dirname, '../packages/slate')],
      use: [
        defaultLoaders.babel
      ]
    })

    return config
  },
}

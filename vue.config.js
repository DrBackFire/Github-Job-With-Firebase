module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '/api/jobs': {
        target: 'https://jobs.github.com/positions.json?markdown=true',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  }
}

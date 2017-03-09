import path from 'path'
import debug from 'debug'
import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
// import App from './components/app'

const log = debug('server')

const server = express()
server.use('/css', express.static('node_modules/normalize-css'))
server.use('/images', express.static(path.resolve(__dirname, 'images')))
server.set('views', path.resolve(__dirname, 'html'))
server.set('view engine', 'pug')

server.get('/', (req, res) => {
  // const html = renderToString(<App />)

  res.render('index', {
    pageTitle: 'Universal Webpack',
    pageHtml: '<h1>Bundled by webpack</h1>' // html
  })
})

// ERROR HANDLERS

// general server errors
server.use((err, req, res, next) => {
  log(`SERVER ERROR: ${err.stack}`)

  res.status(500)
  res.json({
    error: 'server error'
  })
})

server.set('port', process.env.PORT || 3000)

server.listen(server.get('port'), function() {
  const env = server.get('env')
  const port = this.address().port

  log(`Universal webpack server is running in ${env} on port ${port}`)
})

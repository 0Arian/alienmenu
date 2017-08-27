const menubar = require('menubar')
const serve = require('serve')

const port = process.env.PORT ? (process.env.PORT - 100) : 7160

const server = serve('./build', {
  single: ["../build"],
  port: port,
})

var mb = menubar({
    index: `http://localhost:${port}`
})

mb.on('ready', () => console.log('app is ready'))
const menubar = require('menubar')
const serve = require('serve')
const path = require('path')
const fixPath = require('fix-path');

fixPath()

const port = process.env.PORT ? (process.env.PORT - 100) : 5000

const server = serve('./build', {
  single: ["./build"],
  port: port,
  silent: true
})

var mb = menubar({
    index: `http://localhost:${port}`,
    width: 750,
    height: 1100,
    icon: path.join(__dirname, 'src', 'IconTemplate.png')
})

console.log(__dirname);

mb.on('ready', () => console.log('App Started'))
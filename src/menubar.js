var menubar = require('menubar')

var mb = menubar({
    index: 'http://localhost:3000'
})

mb.on('ready', () => console.log('app is ready'))
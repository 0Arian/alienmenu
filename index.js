const menubar = require('menubar')
const path = require('path')
const fixPath = require('fix-path');

fixPath()

var mb = menubar({
    index: 'http://wiry-flock.surge.sh/',
    width: 750,
    height: 1100,
    icon: path.join(__dirname, 'src', 'IconTemplate.png')
})

console.log(__dirname);

mb.on('ready', () => console.log('App Started'))
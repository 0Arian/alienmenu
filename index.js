const menubar = require('menubar')
const path = require('path')
const fixPath = require('fix-path');
const electron = require('electron');

const Menu = electron.Menu;

fixPath()

const contextMenu = Menu.buildFromTemplate([
    { label: "Quit AlienMenu", click: function() { mb.app.quit(); } }
]);

var mb = menubar({
    index: 'http://wiry-flock.surge.sh/',
    width: 750,
    height: 1100,
    icon: path.join(__dirname, 'src', 'IconTemplate.png')
})

console.log(__dirname);

mb.on('ready', () => {
    mb.tray.on('right-click', function() {
        mb.tray.popUpContextMenu(contextMenu);
    });
    console.log("App Started");
})
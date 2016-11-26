/**
 * @author Serge Babayan
 * @module core/Menu
 * @requires electron
 * @requires util/GainsImporter
 * @requires util/PathImporter
 * @copyright Waterloo Aerial Robotics Group 2016
 * @licence https://raw.githubusercontent.com/UWARG/WARG-Ground-Station/master/LICENSE
 * @description Application menu configuration. Custom menu items are added here.
 * The top level object is the menu item name.
 * The second level is the sub-menu name.
 * Add a `callback` attribute with a function if you want to call a function
 * after a user clicks on the item.
 * Add a 'openWindow' attribute with the name of your window if you want to
 * open a specific window.
 * If both `callback` and `openWindow` are provided, the callback will be
 * executed and then the window will be opened.
 * Note: The `View` and `Help` menu items are generated in the MenuBuilder
 *
 * @example <caption>Example of a menu item that calls a function before opening
 * 'project_root/windows/myNewWindow.html'</caption>
 *
 * var Menu = {
 *  'Windows': { //this is the menu label
 *    'Open Your New Window': { //this is the submenu label
 *      callback: function () {
 *        //optional function to be called before opening window
 *      },
 *      openWindow: 'myNewWindow', //name of the window to open (optional)
 *      height: 800, //height and width of the window. Default is 500 by 500
 *      width: 600,
 *      devTools: true, //whether to open chrome devtools with the window (false by default)
 *      type: 'separator' //whether this sub menu item is a separator
 *    }
 *  }
* };
 */

const electron = require('electron');

var Menu = {
  'File': {
    'Import Settings': {},
    'seperator1': {
      type: 'separator' //this is a separator
    },
    'Save Settings as...': {},
    'Quit': {
      callback: electron.app.quit
    }
  },
  'Windows': {
    'Console': {
      openWindow: 'console',
      width: 900,
      height: 500,
      shortcut: 'CmdOrCtrl+Shift+C'
    }
  },
  'Settings': {
    'Network Settings': {
      openWindow: 'networkSettings',
      width: 600,
      height: 500,
      devTools: false,
      shortcut: 'CmdOrCtrl+Shift+N'
    },
    'App Settings': {
      openWindow: 'appSettings',
      width: 600,
      height: 700,
      shortcut: 'CmdOrCtrl+Shift+S',
      devTools: false
    }
  }
};

module.exports = Menu;
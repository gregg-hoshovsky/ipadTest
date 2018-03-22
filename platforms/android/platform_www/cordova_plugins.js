cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-ble-central.ble",
    "file": "plugins/cordova-plugin-ble-central/www/ble.js",
    "pluginId": "cordova-plugin-ble-central",
    "clobbers": [
      "ble"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-ble-central": "1.1.4",
  "cordova-plugin-console": "1.0.7",
  "cordova-plugin-statusbar": "1.0.1",
  "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});
cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-datepicker/www/ios/DatePicker.js",
        "id": "cordova-plugin-datepicker.DatePicker",
        "pluginId": "cordova-plugin-datepicker",
        "clobbers": [
            "datePicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-datepicker": "0.9.2"
}
// BOTTOM OF METADATA
});
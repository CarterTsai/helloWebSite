var page = require('webpage').create()
var system = require('system')
var t
var address

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>')
  phantom.exit()
}

t = Date.now()
address = system.args[1]
page.open(address, function (status) {
  page.render('chung.png');
  phantom.exit()
})

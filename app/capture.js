var page = require('webpage').create()
var system = require('system')
var t
var address

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>')
  phantom.exit()
}

t = Date.now()
address = system.args[1];
filename = system.args[2];
name = system.args[3];
index = system.args[4];
page.open(address, function (status) {
    var loadTiming = 0;
    if (status === 'success') {
        loadTiming = Date.now() - t;
    }
    page.render('./img/'+filename);
    var datas = {
      'index': index,
      'url': address,
      'imageName': filename,
      'name': name,
      'times': loadTiming
    }
    console.log(JSON.stringify(datas));
    page.close();
    phantom.exit();
})

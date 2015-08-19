var spawn = require('child_process').spawn;
var i= 1;

var list = []
spawnPhan();
function spawnPhan() {
	list[i] =  spawn('phantomjs', ['child.js',i]);

	list[i].stdout.on('data', function (data) {
	  console.log('stdout: ' + data);
	});

	list[i].stderr.on('data', function (data) {
	  console.log('stderr: ' + data);
	});

	list[i].on('close', function (code) {
	  console.log('child process exited with code ' + code);
	});
	if(i<40){
		i++;
		setTimeout(function(){
			spawnPhan()
		}, 1000)
	}
}

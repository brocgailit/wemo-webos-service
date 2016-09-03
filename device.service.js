var Promise = require('bluebird');

var Service = require('webos-service');
var service = new Service("com.gailit.wemo.service");

var Wemo = require('wemo-client');
var wemo = new Wemo();

var nmap = Promise.promisifyAll(require('libnmap')), opts = { range: ['192.168.1.2-120'] };
var request = require('request-promise');

var xml2js = Promise.promisifyAll(require('xml2js'));
var xmlparser = new xml2js.Parser({explicitArray: false});
var iptable = [];

function addDevices(responses){

	Promise.map(responses, function(response){

		var url = 'http://'+response.request.uri.host+'/setup.xml';
		return { url: url, body: xmlparser.parseStringAsync(response.body) };

	}).then(function(devices){

		for (var idx in devices){
			wemo.load(devices[idx].url, function(device){
				addDevice(device);
			});
		}
		
	});
	
}

function addDevice(newDevice){
	if( devices.filter(function(device) { 
		return device.macAddress === newDevice.macAddress; 
	}).length > 0){
		console.log('that already exists');
		devices.push({friendlyName: 'that exists!'});
	}else{
		devices.push(newDevice);
	}
}

function foundDevice(newDevice) {

	addDevice(newDevice);

	// Get the client for the found device 
	var client = wemo.client(newDevice);

	// Handle BinaryState events 
	client.on('binaryState', function(value) {
		console.log('Binary State changed to: %s', value);
	});

}

function toggleSwitch(macAddress){

	var result = devices.filter( function(device) {
		return device.macAddress === macAddress;
	});

	if(result.length > 0){
		var client = wemo.client(result[0]);

		client.getBinaryState(function(err, state){
			client.setBinaryState(1-state);
		})
		return true;
	}else{
		return false;
	}

}

// Inital discovery
//wemo.discover(foundDevice);

nmap.scanAsync(opts).then(function(report){
	
	for (var item in report) {
  		for( var host in report[item].host) {
  			for(var port = 49150; port <= 49156; port++)
  			iptable.push({ip: report[item].host[host].address[0].item.addr, port: port});
  		}
  	}

  	Promise.map(iptable, function(address){
  		var url = 'http://'+address.ip+':'+address.port+'/setup.xml';
  		return request({uri:url, resolveWithFullResponse: true}).catch( function(){ return false;} );
  	}).then(function(response){

  		addDevices(response.filter(function(result){ return result != false;}));
  	}).catch( function(e){}  )

});

// a method that always returns the same value
service.register("devices", function(message) {

	wemo.discover(foundDevice);

	if(message.payload.macAddress){
		toggleSwitch(message.payload.macAddress);
		message.respond({
			returnValue: true,
			message: message.payload.macAddress,
			devices: devices
		});
	}else{
		message.respond({
			returnValue: true,
			message: 'Devices',
			devices: devices
		});
	}

});
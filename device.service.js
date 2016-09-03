var Promise = require('bluebird');

var Service = require('webos-service');
var service = new Service("com.gailit.wemo.service");

var Wemo = require('wemo-client');
var wemo = new Wemo();

<<<<<<< HEAD
var nmap = Promise.promisifyAll(require('libnmap')), opts = { range: ['192.168.1.2-120'] };
var request = require('request-promise');

var xml2js = Promise.promisifyAll(require('xml2js'));
var xmlparser = new xml2js.Parser({explicitArray: false});
var iptable = [];

//var devices = [{"deviceType":"urn:Belkin:device:controllee:1","friendlyName":"Dining Area","manufacturer":"Belkin International Inc.","manufacturerURL":"http://www.belkin.com","modelDescription":"Belkin Plugin Socket 1.0","modelName":"Socket","modelNumber":"1.0","modelURL":"http://www.belkin.com/plugin/","serialNumber":"221419K0100FFE","UDN":"uuid:Socket-1_0-221419K0100FFE","UPC":"123456789","macAddress":"94103E2C6A28","firmwareVersion":"WeMo_WW_2.00.10626.PVT-OWRT-SNS","iconVersion":"1|49153","binaryState":"0","iconList":{"icon":{"mimetype":"jpg","width":"100","height":"100","depth":"100","url":"icon.jpg"}},"serviceList":{"service":[{"serviceType":"urn:Belkin:service:WiFiSetup:1","serviceId":"urn:Belkin:serviceId:WiFiSetup1","controlURL":"/upnp/control/WiFiSetup1","eventSubURL":"/upnp/event/WiFiSetup1","SCPDURL":"/setupservice.xml"},{"serviceType":"urn:Belkin:service:timesync:1","serviceId":"urn:Belkin:serviceId:timesync1","controlURL":"/upnp/control/timesync1","eventSubURL":"/upnp/event/timesync1","SCPDURL":"/timesyncservice.xml"},{"serviceType":"urn:Belkin:service:basicevent:1","serviceId":"urn:Belkin:serviceId:basicevent1","controlURL":"/upnp/control/basicevent1","eventSubURL":"/upnp/event/basicevent1","SCPDURL":"/eventservice.xml"},{"serviceType":"urn:Belkin:service:firmwareupdate:1","serviceId":"urn:Belkin:serviceId:firmwareupdate1","controlURL":"/upnp/control/firmwareupdate1","eventSubURL":"/upnp/event/firmwareupdate1","SCPDURL":"/firmwareupdate.xml"},{"serviceType":"urn:Belkin:service:rules:1","serviceId":"urn:Belkin:serviceId:rules1","controlURL":"/upnp/control/rules1","eventSubURL":"/upnp/event/rules1","SCPDURL":"/rulesservice.xml"},{"serviceType":"urn:Belkin:service:metainfo:1","serviceId":"urn:Belkin:serviceId:metainfo1","controlURL":"/upnp/control/metainfo1","eventSubURL":"/upnp/event/metainfo1","SCPDURL":"/metainfoservice.xml"},{"serviceType":"urn:Belkin:service:remoteaccess:1","serviceId":"urn:Belkin:serviceId:remoteaccess1","controlURL":"/upnp/control/remoteaccess1","eventSubURL":"/upnp/event/remoteaccess1","SCPDURL":"/remoteaccess.xml"},{"serviceType":"urn:Belkin:service:deviceinfo:1","serviceId":"urn:Belkin:serviceId:deviceinfo1","controlURL":"/upnp/control/deviceinfo1","eventSubURL":"/upnp/event/deviceinfo1","SCPDURL":"/deviceinfoservice.xml"},{"serviceType":"urn:Belkin:service:smartsetup:1","serviceId":"urn:Belkin:serviceId:smartsetup1","controlURL":"/upnp/control/smartsetup1","eventSubURL":"/upnp/event/smartsetup1","SCPDURL":"/smartsetup.xml"},{"serviceType":"urn:Belkin:service:manufacture:1","serviceId":"urn:Belkin:serviceId:manufacture1","controlURL":"/upnp/control/manufacture1","eventSubURL":"/upnp/event/manufacture1","SCPDURL":"/manufacture.xml"}]},"presentationURL":"/pluginpres.html","host":"192.168.1.4","port":"49153","callbackURL":"http://192.168.1.6:36162"}];
=======
>>>>>>> 41c2414adf3cbd35326c9f399de20187efa307d9
var devices = [];
devices = [{"deviceType":"urn:Belkin:device:controllee:1","friendlyName":"Dining Area","manufacturer":"Belkin International Inc.","manufacturerURL":"http://www.belkin.com","modelDescription":"Belkin Plugin Socket 1.0","modelName":"Socket","modelNumber":"1.0","modelURL":"http://www.belkin.com/plugin/","serialNumber":"221419K0100FFE","UDN":"uuid:Socket-1_0-221419K0100FFE","UPC":"123456789","macAddress":"94103E2C6A28","firmwareVersion":"WeMo_WW_2.00.10626.PVT-OWRT-SNS","iconVersion":"1|49153","binaryState":"0","iconList":{"icon":{"mimetype":"jpg","width":"100","height":"100","depth":"100","url":"icon.jpg"}},"serviceList":{"service":[{"serviceType":"urn:Belkin:service:WiFiSetup:1","serviceId":"urn:Belkin:serviceId:WiFiSetup1","controlURL":"/upnp/control/WiFiSetup1","eventSubURL":"/upnp/event/WiFiSetup1","SCPDURL":"/setupservice.xml"},{"serviceType":"urn:Belkin:service:timesync:1","serviceId":"urn:Belkin:serviceId:timesync1","controlURL":"/upnp/control/timesync1","eventSubURL":"/upnp/event/timesync1","SCPDURL":"/timesyncservice.xml"},{"serviceType":"urn:Belkin:service:basicevent:1","serviceId":"urn:Belkin:serviceId:basicevent1","controlURL":"/upnp/control/basicevent1","eventSubURL":"/upnp/event/basicevent1","SCPDURL":"/eventservice.xml"},{"serviceType":"urn:Belkin:service:firmwareupdate:1","serviceId":"urn:Belkin:serviceId:firmwareupdate1","controlURL":"/upnp/control/firmwareupdate1","eventSubURL":"/upnp/event/firmwareupdate1","SCPDURL":"/firmwareupdate.xml"},{"serviceType":"urn:Belkin:service:rules:1","serviceId":"urn:Belkin:serviceId:rules1","controlURL":"/upnp/control/rules1","eventSubURL":"/upnp/event/rules1","SCPDURL":"/rulesservice.xml"},{"serviceType":"urn:Belkin:service:metainfo:1","serviceId":"urn:Belkin:serviceId:metainfo1","controlURL":"/upnp/control/metainfo1","eventSubURL":"/upnp/event/metainfo1","SCPDURL":"/metainfoservice.xml"},{"serviceType":"urn:Belkin:service:remoteaccess:1","serviceId":"urn:Belkin:serviceId:remoteaccess1","controlURL":"/upnp/control/remoteaccess1","eventSubURL":"/upnp/event/remoteaccess1","SCPDURL":"/remoteaccess.xml"},{"serviceType":"urn:Belkin:service:deviceinfo:1","serviceId":"urn:Belkin:serviceId:deviceinfo1","controlURL":"/upnp/control/deviceinfo1","eventSubURL":"/upnp/event/deviceinfo1","SCPDURL":"/deviceinfoservice.xml"},{"serviceType":"urn:Belkin:service:smartsetup:1","serviceId":"urn:Belkin:serviceId:smartsetup1","controlURL":"/upnp/control/smartsetup1","eventSubURL":"/upnp/event/smartsetup1","SCPDURL":"/smartsetup.xml"},{"serviceType":"urn:Belkin:service:manufacture:1","serviceId":"urn:Belkin:serviceId:manufacture1","controlURL":"/upnp/control/manufacture1","eventSubURL":"/upnp/event/manufacture1","SCPDURL":"/manufacture.xml"}]},"presentationURL":"/pluginpres.html","host":"192.168.1.4","port":"49153","callbackURL":"http://192.168.1.6:36162"}];


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
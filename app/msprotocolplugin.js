var uri = require('url')
  , zmq = require('crane-zeromq')
  , loc = require('../lib/location');


exports.createConnection = function(options, readyListener) {
  if (typeof options == 'string') {
    options = { url: options };
  }
  
  var url = uri.parse(options.url);
  if (url.protocol !== 'tcp:') { return; }
  
  console.log('CREATE ZMQ!!!');
  
  var conn = new zmq.Connection();
  conn.location = loc;
  return conn;
  //return {};
};

exports.getName = function(options) {
 
  if (typeof options == 'string') {
    options = { url: options };
  }
  
  return 'zmq'
}


exports['@implements'] = 'http://i.bixbyjs.org/ms/ProtocolPlugIn';
exports['@protocol'] = 'zmq';

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an Event
    // emitter.emit('messageLogged', { id: 1, url: 'http://' });
    this.emit('messageLogged', { id: 1, url });
  }
}

module.exports = Logger;

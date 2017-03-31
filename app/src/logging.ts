const socket = require('socket.io-client')('http://localhost:1337');

export class Logging {
  activate() {
    socket.connect();
    socket.emit('message', { test: 'hi'});
    socket.on('connect', () => console.log('socketId: ', socket.id));
    socket.on('stuff', (whatev) => console.log(whatev));
  }
}

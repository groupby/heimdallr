import { socket } from './app';

export class Logging {

  activate() {
    socket.on('charts_updated', (charts) => {
      console.log('ma charts!', charts);
    });
  }
}

import express from 'express';
import Bonjour from 'bonjour';
import router from './router';

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/api', router);

const bonjour = Bonjour();
const service = bonjour.publish({
    name: 'KRK v2',
    type: 'http',
    port: port,
    host: 'krkserver.local'
});
service.on('up', () => {
    var msg = `Bonjour service is up: ${service.name}`;
    msg += `\n    published: ${service.published}`;
    msg += `\n    name: ${service.name}`;
    msg += `\n    type: ${service.type}`;
    msg += `\n    port: ${service.port}`;
    msg += `\n    host: ${service.host}`;
    msg += `\n    fqdn: ${service.fqdn}`;
    msg += `\n    txt: ${service.txt}`;
    msg += `\n    protocol: ${service.protocol}`;
    console.log(msg);

    console.log(JSON.stringify(service));
});
service.on('down', () => {
    console.log('Bonjour service is down');
});
service.on('error', (error) => {
    console.log('Bonjour service error:', error);
});

let server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

server.on('close', () => {
  console.log('Server is closed');
  service.stop();
  bonjour.destroy();
});
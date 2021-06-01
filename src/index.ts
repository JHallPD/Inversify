import 'reflect-metadata';
import {InversifyExpressServer} from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import "./controllers/ApiManager";
import container from "./inversify.config";



// start the server
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
const port = 3000
const serverInstance = server.build();
serverInstance.listen(port);
console.log('Server started on port:', port);


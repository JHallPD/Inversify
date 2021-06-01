import 'reflect-metadata';
import {InversifyExpressServer} from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import TYPES from "./types";
import "./controllers/ApiManager";
import {TodoClient} from "./service/ApiManager";

// load everything needed to the Container
const container = new Container();
container.bind<TodoClient>(TYPES.TodoClient).to(TodoClient);

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


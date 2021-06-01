import { Container } from "inversify";
import TYPES from "./types";
import {TodoClient} from "./service/ApiManager";
import {ApiManager} from "./controllers/ApiManager";

// load everything needed to the Container
const container = new Container();
container.bind<TodoClient>(TYPES.TodoClient).to(TodoClient);
container.bind<ApiManager>(TYPES.ApiManager).to(ApiManager);
export default container;

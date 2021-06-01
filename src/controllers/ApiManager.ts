import {inject} from "inversify";
import "reflect-metadata";
import {ApiManagerInterface} from "../interfaces/todoInterfaces";
import TYPES from "../types";
import {controller, httpGet} from 'inversify-express-utils';
import {TodoClient} from '../service/ApiManager';




@controller('/')
export class ApiManager implements ApiManagerInterface  {

    constructor(@inject(TYPES.TodoClient) private todoClient: TodoClient) { }

    @httpGet("/")
    public async fetchData() {
        return await this.todoClient.getTodos();
    }
}


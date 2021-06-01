import {inject} from "inversify";
import "reflect-metadata";
import {ApiManagerInterface, Todos} from "../interfaces/todoInterfaces";
import TYPES from "../types";
import { interfaces, controller, httpGet, httpPost, request, response, httpPut, httpDelete
} from 'inversify-express-utils';
import {TodoClient} from '../service/ApiManager';
import * as express from 'express';

// @controller("/todos")
// export class ApiManager implements ApiManagerInterface {
//     private _todo: TodoClient;
//     constructor(@inject(TYPES.TodoClientInterface) _TodoClient: TodoClient) {
//         this._todo = _TodoClient;
//     }
//     @httpGet('/')
//     public get(): string {
//         return 'Home sweet home';
//     }
//     @httpGet("/")
//     public async fetchData(@request() req: Request, @response() res: Response) {
//             return await this._todo.getTodos();
//     }
// }




@controller('/')
export class ApiManager implements ApiManagerInterface  {

    constructor(@inject(TYPES.TodoClient) private todoClient: TodoClient) { }

    // @httpGet('/')
    // public getUsers(): Todos[] {
    //     return this.todoClient.getUsers();
    // }
    @httpGet("/")
    public async fetchData(req: express.Request, res: express.Response) {
            return await this.todoClient.getTodos();
    }
}

import {inject} from "inversify";
import "reflect-metadata";
import {ApiManagerSimpleInterface} from "../interfaces/todoInterfaces";
import TYPES from "../types";
import {controller, httpGet} from 'inversify-express-utils';
import {TodoClient} from '../service/ApiManager';

@controller('/simple')
export class ApiManagerSimple implements ApiManagerSimpleInterface  {

    constructor(@inject(TYPES.TodoClient) private todoClient: TodoClient) { }

    @httpGet("/")
    public async fetchData() {
        let rows = `<table style='width:100%; border-collapse: collapse; border: 2px solid black;'>
                        <tr style='border: 1px black solid !important'>
                            <th>UserID</th><th>TodoID</th><th>Title</th><th>Completed</th>
                        </tr>`;
        const data = await this.todoClient.getTodos();
        data.forEach((todo) => {
            if (todo) {
                rows +=`<tr style='border-top: 1px lightgray solid;border-bottom: 1px lightgray solid'>
                            <th>${todo.userId}</th>
                            <th>${todo.id}</th>
                            <th>${todo.title}</th>`
                if (todo.completed){
                rows +=`<th>
                            <input type="checkbox" id="${todo.id}" value="${todo.completed}" checked>
                        </th>
                    </tr>`
                }else {
                    rows +=`<th>
                            <input type="checkbox" id="${todo.id}" value="${todo.completed}" >
                        </th>
                    </tr>`
                }

            }
        });
        rows +="</table>"
        return rows;
    }
}

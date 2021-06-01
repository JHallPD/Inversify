import { injectable } from 'inversify';
import {Todos} from "../interfaces/todoInterfaces";
import fetch from "node-fetch";


@injectable()
export class TodoClient {
    private toDoStorageNew: Todos[] = []
    private toDoStorage: Todos[] = [  {
            "userId": 1,
            "id": 1,
            "title": "test",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "test",
            "completed": false
        }];
    public async getTodos(): Promise<Todos[]> {
        try {
            await fetch('https://jsonplaceholder.typicode.com/todos')
                .then((res: { json: () => any; }) => res.json())
                .then((res: Todos[]) => {
                    this.toDoStorage = res;
                })
            return this.toDoStorage;
        }catch(error){
            return error;
        }

    }
}


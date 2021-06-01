import { injectable } from 'inversify';
import {Todos} from "../interfaces/todoInterfaces";
import fetch from "node-fetch";
import "reflect-metadata";

@injectable()
export class TodoClient {
    private toDoStorage: Todos[] = [];
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


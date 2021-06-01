import * as express from "express";

export interface ApiManagerInterface {
    fetchData(req: express.Request, res: express.Response): Promise<Todos[]>;
}
export interface TodoClientInterface {
    getTodos(): Promise<Todos[]>;
}
export interface Todos {
    userId: number
    id: number
    title: string
    completed: boolean
}

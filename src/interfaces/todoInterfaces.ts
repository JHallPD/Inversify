export interface ApiManagerInterface {
    fetchData(): Promise<Todos[]>;
}
export interface ApiManagerSimpleInterface {
    fetchData(): Promise<string>;
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

export interface ApiManagerInterface {
    fetchData(): Promise<Todos[]>;
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

import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import container from "../src/inversify.config"
import { mocked } from 'ts-jest/utils';
import {TodoClient} from "../src/service/ApiManager";
import TYPES from "../src/types";

describe('todoClient mock tests', () => {
    const mockedTodoClient = mocked(container.get<TodoClient>(TYPES.TodoClient), false);

    beforeEach(() => { // if you have an existing `beforeEach` just add the following line to it
        fetchMock.resetMocks()
    })
    it('checking mocked getTodos data', () => {
        fetchMock.mockResponseOnce(JSON.stringify([{
            "userId": 999,
            "id": 999,
            "title": "fetch mock 1",
            "completed": false
        },{
            "userId": 998,
            "id": 998,
            "title": "fetch mock 2",
            "completed": true
        }]))

        //assert on the response
        mockedTodoClient.getTodos().then(res => {
            expect(res[0]).toEqual({
                "userId": 999,
                "id": 999,
                "title": "fetch mock 1",
                "completed": false
            })
            expect(res[1]).toEqual({
                "userId": 998,
                "id": 998,
                "title": "fetch mock 2",
                "completed": true
            })
            expect(res).toHaveLength(2);
        })

        //assert on the times called and arguments given to fetch
        expect(fetchMock.mock.calls.length).toEqual(1)
        expect(fetchMock.mock.calls[0][0]).toEqual('https://jsonplaceholder.typicode.com/todos')
    })
});

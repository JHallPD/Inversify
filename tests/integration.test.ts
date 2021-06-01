import {ApiManager} from "../src/controllers/ApiManager";
import container from "../src/inversify.config";
import TYPES from "../src/types";

describe('integration testing', () => {
    let apiManager: ApiManager;

    beforeEach(() => {
        apiManager = container.get<ApiManager>(TYPES.ApiManager);
    });

    test('checking getTodos data', async () => {
        const data = await apiManager.fetchData();
        expect(data).toHaveLength(200);
        expect(data[1]).toStrictEqual({"completed": false, "id": 2, "title": "quis ut nam facilis et officia qui", "userId": 1});
        expect(data[199]).toStrictEqual({"completed": false, "id": 200, "title": "ipsam aperiam voluptates qui", "userId": 10});
    });
});

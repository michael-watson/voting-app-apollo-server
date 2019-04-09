import { RESTDataSource } from 'apollo-datasource-rest';

export class VotingRestDatasource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://graphqlvoting.azurewebsites.net/api/';
    }

    async getScores() {
        return await this.get(`score`);
    }
    async incrementPoints(id: Number){
        return await this.get(`score/${id}`);
    }
}
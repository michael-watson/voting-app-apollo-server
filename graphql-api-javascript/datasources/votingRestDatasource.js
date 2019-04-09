const { RESTDataSource } = require('apollo-datasource-rest');

module.exports = class VotingRestDatasource extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://graphqlvoting.azurewebsites.net/api/';
    }

    async getScores() {
        return await this.get(`score`);
    }
    async incrementPoints(id){
        return await this.get(`score/${id}`);
    }
}
import { ApolloServer } from 'apollo-server-azure-functions';
import { AzureFunction } from "@azure/functions"

import * as fs from 'fs';
import * as path from 'path';
import { DocumentNode } from 'graphql';
import { VotingRestDatasource } from '../datasources/votingRestDatasource';

let typeDefs = fs. readFileSync(path.join(__dirname,"./schema.graphql"),"utf8") as unknown as DocumentNode;

let resolvers = {
    Query: {
        teams: async (root: any, __: any, { dataSources }: any) => JSON.parse(await dataSources.votingRestDatasource.getScores())
    },
    Mutation: {
        incrementPoints: async(root: any, { id }: any, { dataSources }: any) => JSON.parse(await dataSources.votingRestDatasource.incrementPoints(id))
    }
};

let server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: ()=> ({
        votingRestDatasource: new VotingRestDatasource()
    })
});

const graphqlHttpTrigger: AzureFunction = server.createHandler();

export default graphqlHttpTrigger;
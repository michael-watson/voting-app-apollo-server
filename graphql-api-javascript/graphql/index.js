const VotingRestDatasource = require('../datasources/votingRestDatasource');

const { ApolloServer, gql } = require('apollo-server-azure-functions');

const typeDefs = gql(`
    type Team {
        id: ID
        name: String
        points: Int
    }
    type Query {
        teams: [Team]
    }
    type Mutation {
        incrementPoints(id: ID!): Team
    }
`);

const resolvers = {
    Query: {
        teams: async (root, __, { dataSources }) => JSON.parse(await dataSources.votingRestDatasource.getScores())
    },
    Mutation: {
        incrementPoints: async(root, { id }, { dataSources }) => JSON.parse(await dataSources.votingRestDatasource.incrementPoints(id))
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        votingRestDatasource: new VotingRestDatasource()
    })
});

module.exports = server.createHandler();
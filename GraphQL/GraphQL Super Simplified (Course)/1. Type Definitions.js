import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  // Type Definitions
  typeDefs: `#graphql
    type Query {
        hello: String
    }`,

  // Resolvers
  resolvers: {
    Query: {
      hello: () => "Hello World",
    },
  },
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server ready at ${url}`);

/*

query ExampleQuery {
  hello
}

*/
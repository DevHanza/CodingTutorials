import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Scalar Types - String, Boolean, Int, Float, ID
const server = new ApolloServer({
  typeDefs: `#graphql
        type Query {
            id: ID!
            name: String
            age: Int
            isActive: Boolean
            height: Float
        }
    `,
  resolvers: {
    Query: {
        id: () => "1",
        name: () => "Jhon Doe",
        age: () => 30,
        isActive: () => true,
    },
  },
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server ready at ${url}`);

/*

query ExampleQuery {
  id
  name
  age
  isActive
}

*/
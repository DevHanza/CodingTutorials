import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Operation Arguments in GraphQL

const server = new ApolloServer({
  typeDefs: `#graphql

  type Query {
    greetings(name: String): String!
    add(a: Int!, b: Int!): Int
  }
    `,
  resolvers: {
    Query: {
      // Greeting
      greetings(parent, args, ctx, info) {
        console.log(args);
        return `Hello ${args.name}`;
      },

      // Add
      add: (_, { a, b }) => a + b,
    },
  },
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server ready at ${url}`);

/*

{
  greetings(name: "Jordan")
}
*/

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Custom Types in GraphQL 

const server = new ApolloServer({
  typeDefs: `#graphql
a
        type Post {
            id: ID!
            title: String!
            body: String!
            tags: [String] 
        }

        type Query {
            posts: [Post]
        }
    `,
  resolvers: {
    Query: {
      posts: () => [
        {
          id: "1",
          title: "Post 1",
          body: "Body of post 1",
          tags: ["tag1", "tag2"],
        },
        {
          id: "2",
          title: "Post 2",
          body: "Body of post 2",
          tags: ["tag3", "tag4"],
        },
      ],
    },
  },
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server ready at ${url}`);

/*

{
  posts {
    id
    title
    body
    tags
  }
}


*/
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//  Mutation : Add 
// A mutation us used to change data, like creating, updating, or deleting something.

// Think of it this way
//  == QUERIES are for reading data
//  == MUTATIONS are for writing data

const server = new ApolloServer({
  typeDefs: `#graphql

    type User {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        password: String!
    }

    type Query {
        users: [User!]!
    }
     
    type Mutation {
        addUser(first_name: String!, last_name: String!, email: String!, password: String!): User!
    }


    `,

  resolvers: {
    Query: {
      users: () => users,
    },

    Mutation: {
      addUser: (_, { first_name, last_name, email, password }) => {
        const newUser = {
          id: idCounter++,
          first_name,
          last_name,
          email,
          password,
        };

        users.push(newUser);
        return newUser;
      },
    },
  },
});

let users = [];
let idCounter = 1;

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server ready at ${url}`);

/*

mutation {
  addUser(
    first_name: "John"
    last_name: "Doe"
    email: "jhon@example.com"
    password: "secure123"
  ) {
    id
    first_name
    last_name
    email
  }
}

*/

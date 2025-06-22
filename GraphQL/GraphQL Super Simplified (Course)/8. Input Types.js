import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Input Types

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

    input AddUserInput {
        first_name: String!
        last_name: String!
        email: String!
        password: String!
    }
     
    type Mutation {
        addUser(input: AddUserInput!): User!
    }


    `,

  resolvers: {
    Query: {
      users: () => users,
    },

    Mutation: {
      addUser: (_, { input }) => {
        const { first_name, last_name, email, password } = input;

        if (users.find((user) => user.email === email)) {
          throw new Error("user already exists");
        }

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
    input: {
      first_name: "John"
      last_name: "Doe"
      email: "jhon@example.com"
      password: "secure123"
    }
  ) {
    id
    first_name
    last_name
    email
  }
}


*/

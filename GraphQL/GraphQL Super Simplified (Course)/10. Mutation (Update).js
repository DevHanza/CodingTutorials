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

    input UpdateUserInput {
        first_name: String
        last_name: String
        email: String
        password: String
    }
     
    type Mutation {
        addUser(input: AddUserInput!): User!
        deleteUser(id: ID!): User!
        updateUser(id: ID!, input: UpdateUserInput!): User!
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

      deleteUser: (_, { id }) => {
        const userIndex = users.findIndex(
          (user) => String(user.id) === String(id)
        );

        if (userIndex === -1) {
          throw new Error("User not found");
        }

        const deletedUser = users[userIndex];
        users.splice(userIndex, 1);
        return deletedUser;
      },

      updateUser: (_, { id, input }) => {
        const user = users.find((user) => String(user.id) === String(id));

        if (!user) {
          throw new Error("User not found");
        }

        Object.assign(user, input);
        return user;
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
  deleteUser(id: "1") {
    id
    first_name
    email
  }
}


*/

import {ApolloServer, gql} from 'apollo-server'
import { sequelizeConnect } from './config/sequelize';
import typeDefs from './feature/user/typeDefs';
import resolvers from './feature/user/resolvers';

const server = new ApolloServer({
  typeDefs, 
  resolvers 
});
    
sequelizeConnect();
  
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
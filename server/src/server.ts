import {ApolloServer, gql} from 'apollo-server'
import { sequelizeConnect } from './config/sequelize';
import typeDefs from './feature/user/typeDefs';
import resolvers from './feature/user/resolvers';
import jwt from "jsonwebtoken";

const SECRET= 'wr3r23fwfwefwekwself.2456342.dawqdq'

const getMe = async (req: any) => {
  const token = req.headers['authorization'];
   
  if (token) {
    try {
      return await jwt.verify(token, SECRET);
    } catch (e) {
      throw new Error(
        'Your session expired. Sign in again.',
      );
    }
  }
};

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: async ({ req }) => {
    const me = await getMe(req);
    return {
      //models: rootModels,
      me,
      secret: SECRET,
    };
  },
});
    
sequelizeConnect();
  
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
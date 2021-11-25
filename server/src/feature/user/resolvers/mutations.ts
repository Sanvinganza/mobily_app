import { any } from 'sequelize/dist/lib/operators';
import { User } from '../model';
import jwt from 'jsonwebtoken'
export type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;

export interface IResolverMap {
  [field: string]: ResolverFn;
}

const createToken = async (user: any, secret: any, expiresIn: any) => {
  const { userName, userLastName, email} = user;
  return await jwt.sign({ userName, userLastName, email }, secret, {
    expiresIn,
  });
};

// function getUser(userName: string, email: string){
//     const user = User.findOne({
//       where: {
//         userName: userName,
//         email: email
//      },
//   })
//     return user;
//   }

export default <IResolverMap>{
    signUp: async (parent, { userName, userLastName, email }, {secret})=> {
      
        const users = await User.findOne({
          where: {
            userName: userName,
            email: email
         },
      })
      if(users==null){
      const user = await User.create({
        userName,
        userLastName,
        email
      })
      return { token: createToken(user, secret, '30m') };} else {throw new Error("not found");
    }
      }
    ,

    signIn: async (
      parent,
      { userName, email },
      { secret },
    ) => {
      
        const users = await User.findOne({
          where: {
            userName: userName,
            email: email
         },
      })
      if(users!=null){
       return { token: createToken(users, secret, '30m') };}else {throw new Error("not found");
    }     
    },
}
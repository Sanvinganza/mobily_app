import { User } from "../model";

export type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;

export interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{
    getUsers: async () => {
      try{
        const users = await User.findAll();
        return users
      }
      catch(error){
        console.log(error)
      }
    },
    getUser: async (parent, args) => {
      try {
        const {  userName, email } = args;
        const user = await User.findOne({
          where: {
            userName: userName,
            email: email
         },
      })
        return user;
      } catch (error) {throw new Error("not found");
      }
    },
}
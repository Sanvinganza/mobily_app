import { User } from '../model';

export type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;

export interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{
    signUp: async (parent, args, { model }, info ) => {
      const { userName, userLastName, email } = args;
      const user = await User.create({
        userName,
        userLastName,
        email
      })
      return user
    }
}
import { User } from '../model'

export default {
    signUp: User.create({
        userName: "test@test.com",
        userLastName: "Alice",
        email: '12345'
      }).then(res=>{
        console.log(res);
      }).catch(err=>console.log(err)),
}
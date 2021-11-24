import { User } from "../model";

export default {
    getUsers: User.findAll({raw:true}).then(users=>{
      console.log(users);
    }).catch(err=>console.log(err)),
}
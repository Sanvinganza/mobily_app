import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../config/sequelize';

const User = sequelize.define('User', {

    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    userLastName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sequelize.sync()
  // .then(result=>console.log(result))
  // .catch(err=> console.log(err));
  // console.log(User === sequelize.models.User);

export { User }

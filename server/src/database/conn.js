import Sequelize from 'sequelize';

// Config database
const config = {
  dbName: 'postgres',
  user: 'postgres',
  pass: 'savenkov',
  driver: 'postgres',
  host: 'localhost'
};

// Make connection
const Conn = new Sequelize(config.dbName, config.user, config.pass, {
  dialect: config.driver,
  host: config.host
});

export default Conn;

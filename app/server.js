const { app, port } = require('./app.js');
const { sequelize } = require('./config/connection');

const startServer = async () => {
  try {

    // Sync Sequelize models with the database
    await sequelize.sync();

    // Start the server
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

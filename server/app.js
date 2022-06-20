'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const mongoose = require('mongoose')

// CONNECT TO MONGODB
try{

  const URI = process.env.MONGODB_URI;
  console.log("devuelve: "+URI);
  mongoose.connect(URI, 
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  );

  const connection = mongoose.connection;
  connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
  } )

} catch (e) {
  console.error(`No te has podido conectar a la base de datos ${e}`)
}

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

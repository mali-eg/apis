/*
routes index is used to map all toutes in the server.js
*/
module.exports = function(server) {

    require('./routes/TestData_GET')(server);

}
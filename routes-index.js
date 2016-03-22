/*
routes index is used to map all toutes in the server.js
*/
module.exports = function(server) {

    require('./routes/testData_GET')(server);

}
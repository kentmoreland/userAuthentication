const mongoose = require('mongoose');
const ul = require('./ul');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log('error');
});

mongoose.connection.on('open', () => {
  console.log('database is runnin!');
});


ul.listen(ul.get('port'), () => {
  console.log(`Logins is listening on port ${ul.get('port')}`);
});

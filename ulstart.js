const ul = require('./ul');


ul.listen(ul.get('port'), () => {
  console.log(`Logins is listening on port ${ul.get('port')}`);
});

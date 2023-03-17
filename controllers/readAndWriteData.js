const fs = require('fs');

module.exports.getAllUser = ()=>{
   const jsonUsers = fs.readFileSync('users.json');
   return JSON.parse(jsonUsers);
};
module.exports.addUser = (users)=>{
    const userStrignify = JSON.stringify(users)
    fs.writeFileSync('users.json', userStrignify);
};

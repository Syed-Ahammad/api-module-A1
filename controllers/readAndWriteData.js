const fs = require('fs');

module.exports.getAllUser = ()=>{
   const jsonUsers = fs.readFileSync('users.json', 'utf8');
//    console.log(jsonUsers);
   return JSON.parse(jsonUsers);
};
module.exports.addUser = (users)=>{
    const userStringify = JSON.stringify(users)
    fs.writeFileSync('users.json', userStringify, 'utf8', (err)=>{
        if(err){
            const mag = {massege : "user not saved"}
         return mag;
        }
        else{
            const mag = {massege : "user save successfully"}
         return mag;
        }
    });
    // console.log(userStringify);
};

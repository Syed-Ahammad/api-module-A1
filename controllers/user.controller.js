const fs = require('fs');
const usersData = require('./readAndWriteData');
const allUsers = usersData.getAllUser();
// const users = JSON.stringify(allUsers)
module.exports.getRandomUser = (req, res, next)=>{

    const randomNumber = Math.round(Math.random() * allUsers.length);
    // console.log(randomNumber)
    res.send(allUsers[randomNumber])
    // console.log(allUsers)
    res.end()
};

module.exports.getAllUser = (req, res, next)=>{
    res.send(allUsers);
    res.end()
};
module.exports.getLimitUser = (req, res, next)=>{
    const limit = req.params.id;
    allUsers.length = limit
    usersData.getAllUser()
    // console.log(limit)
    res.send(allUsers)
};
module.exports.saveUser = (req, res, next)=>{
    const user = JSON.stringify(req.body);
    console.log(user)

   fs.writeFileSync('users.json', user);
    // fs.readFile('users.json', (err, data)=>{
    //     let users = JSON.parse(data);
    //     users = [...users, user ];
    //     fs.writeFile('users.json',JSON.stringify(users), (err)=>{
    //         if(err){
    //             res.send('user save to failed');
    //             res.end()
    //         }
    //         else{
    //             res.send('user saved successfully');
    //             res.end()
    //         }
    //     })
    // })
    res.send(user)
    res.end()
};
const fs = require('fs');
const usersData = require('./readAndWriteData');
module.exports.getRandomUser = (req, res, next)=>{
    const allUsers = usersData.getAllUser()

    const randomNumber = Math.round(Math.random() * allUsers.length);
    // console.log(randomNumber)
    res.send(allUsers[randomNumber])
    // console.log(allUsers)
    res.end()
};

module.exports.getAllUser = (req, res, next)=>{
    const allUsers = usersData.getAllUser()
    res.send(allUsers);
    res.end()
};
module.exports.getLimitUser = (req, res, next)=>{
    const allUsers = usersData.getAllUser()
    const limit = req.params.limit;
    allUsers.length = limit
    // console.log(limit)
    res.send(allUsers)
};
module.exports.saveUser = (req, res, next)=>{
    const oldUsers = usersData.getAllUser()
    req.body._id = oldUsers.length + 1;
    const newUsers = [...oldUsers, req.body];
    const saved = usersData.addUser(newUsers);
    console.log(saved)
    res.send(saved)
    res.end()
};
module.exports.updateUser = (req, res, next)=>{
    const allUsers = usersData.getAllUser();
    const userData = req.body;
    const {name, address, gender, contact, photoUrl} = userData;
    const id = req.params.id;
    //find existing user by id
    const existUser = allUsers.find(user=> user._id == id);
    // console.log(existUser)
    if(!existUser){
        return res.status(404).send({err: true, mag: "user not found"})
    }
    else if(name == null || address == null|| gender == null || contact == null || photoUrl == null){
        // console.log(userData);
        res.status(406).send({err: true, mag: "Not acceptable give all information"})
    }else{
        userData._id = parseInt(id);
        const restUsers = allUsers.filter(user=> user._id != id);
        const updateUser = usersData.addUser([...restUsers, userData])
        console.log(updateUser)
        res.status(200).send({mas: "Data update successfully"})
    }
    res.end()
};
module.exports.deleteUser = (req, res, next)=>{
    const id = req.params.id;
    const allUsers = usersData.getAllUser();
    const deleteUser = allUsers.find(user=> user._id == id);

    if(!deleteUser){
        console.log("user not found")
    }
    else{
        const restUsers = allUsers.filter(user => user._id != id)
        const deleteSuccess = usersData.addUser(restUsers)
        console.log(deleteSuccess)
    }
res.end()
};
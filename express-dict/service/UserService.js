const { User } = require('../model/User');

const loadUsers = async ()=> {
     return await User.find();
}
const loadUser = ()=>{}

const addUser = async (newUser)=>{
    const user = new User(newUser);
    const savedUser = await user.save();
    return savedUser; 
}

const bulkAddUser = async (newUsers)=>{
    const users = User.create(newUsers);
    return users; 
}

const findUser = async (newUser)=>{
    return await User.findOne(newUser);
}

const removeUser = ()=>{ }

const removeAllUser = async () =>{
    const deleted = await User.deleteMany();
    return deleted; 
}

const updateUser = ()=>{}

module.exports = {
	loadUsers,
	loadUser,
	addUser,
    bulkAddUser,
    findUser,
	removeUser,
	removeAllUser,
	updateUser
}
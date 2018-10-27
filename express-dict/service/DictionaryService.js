const { Dictionary } = require('../model/Dictionary');

const loadWords = async ()=> {
     return await Dictionary.find();
}

const addWord = async (addWord)=>{
    const dictionary = new Dictionary(addWord);
    const savedWord = await dictionary.save();
    return savedWord; 
}


const findWord = async (addWord)=>{
    return await Dictionary.findOne(addWord);
}


const findAndUpdateWord = async (addWord)=>{
    return await Dictionary.findOne(addWord);
}


const deleteAllWord = async () =>{
    const deleted = await Dictionary.deleteMany();
    return deleted; 
}

module.exports = {
	loadWords,
	addWord,
	findWord,
	findAndUpdateWord,
	deleteAllWord
}
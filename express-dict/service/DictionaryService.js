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

module.exports = {
	loadWords,
	addWord,
	findWord
}
const db = require('./../config/connection');
const { User, Question, } = require('./../models');
const userSeeds = require('./userSeeds.json');
const questionSeeds = require('./questionSeeds.json');
// const cleanDB = require('./cleanDB');

db.once('open', async () => {
  
    await User.create(userSeeds);

    await Question.create(questionSeeds);
  
    console.log('all done!');
    process.exit(0);
  });


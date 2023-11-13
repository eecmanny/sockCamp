const db = require('./../config/connection');
const { User, Question, Answer} = require('./../models');
const userSeeds = require('./userSeeds.json');
const questionSeeds = require('./questionSeeds.json');
const answerSeeds = require('./answerSeeds.json');

db.once('open', async () => {
    await cleanDB('Answers', 'answers');
  
    await User.create(userSeeds);

    await cleanDB('Questions', 'questions');

    await Question.create(questionSeeds);

    await cleanDB('Answers', 'answers');

    await Answer.create(answerSeeds);
  
    console.log('all done!');
    process.exit(0);
  });
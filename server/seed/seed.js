const db = require('./../config/connection');
const { User, Question, Answer} = require('./../models');
const userSeeds = require('./userSeeds.json');
const questionSeeds = require('./questionSeeds.json');
const answerSeeds = require('./answerSeeds.json');
// const cleanDB = require('./cleanDB');

db.once('open', async () => {
    // await cleanDB('Answers', 'answers');
  
    // await User.create(userSeeds);

    // await cleanDB('Questions', 'questions');

    await Question.create(questionSeeds);

    await Answer.create(answerSeeds);


    // for (let i = 0; i < questionSeeds.length; i++) {
    //   const { questionId } = await Question.create(questionSeeds[i]);
    //   const answer = await Question.findOne({ _id: questionId }).populate('answers');
    // } 
    // catch (err) 
    // {
    //   console.error(err);
    //   process.exit(1);
    // }
  
    console.log('all done!');
    process.exit(0);
  });
//OPTION A (naive): check on certain intervals
//iterate over the User_Platform join
//  if a post generation is due
//    fetch url content based upon interests
//    write message to the post queue
//    update field for post due date

const CronJob = require('cron').CronJob;
let counter = 0;
const postQueue = [];

// fetch url content based upon interests
const getUrl = (interests) => {
  const topic = interests[counter % interests.length];
  return `www.google.com?${topic}`;
};

//write message to the post queue
const postToQueue = (message) => {
  postQueue.push(message);
};

const users = {
  a: {
    interests: ['dogs', 'cats'],
    interval: 3,
    dueNext: 10,
  },
  b: {
    interests: ['pizza', 'elephants'],
    interval: 7,
    dueNext: 5,
  },
};

const test = new CronJob('*/2 * * * * *', () => {
  console.log('counter: ' , counter);
  counter++;

  for (let key in users) {
    if (users[key].dueNext <= counter) {
      const url = getUrl(users[key].interests);
      postToQueue({
        user: key,
        message: url,
      });
      users[key].dueNext += users[key].interval;

      console.log('postQueue ' , postQueue);
    }
  }
}, null, true, 'America/Los_Angeles');


module.exports = {
  test,
};


//post queue
//  userid
//  timeToPost
//  platform
//  status
//  token
//  message
//  
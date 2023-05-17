const connection = require('../config/connection');
const { Thought, User } = require('../models');

const user = [
  {
      "username": "steevo",
      "email": "steven@yahoo.com",
      'thoughts': []
  },
  {
      "username": "heavenG",
      "email": "mike@yahoo.com",
      'thoughts': []
  },
  {
      "username": "crazyKid",
      "email": "john@yahoo.com",
      'thoughts': []
  },
  {
      "username": "cubeBoy",
      "email": "jake@yahoo.com",
      'thoughts': []
  },
  {
      "username": "senselessdan",
      "email": "daniel@yahoo.com",
      'thoughts': []
  },
];

const thought = [
  {
      'thoughtText': 'Loving this app',
      'username': 'steevo',
      'reactions': []
  },
  {
      'thoughtText': 'Just got the new iPhone! Yay me!',
      'username': 'heavenG',
      'reactions': []
  },
  {
      'thoughtText': 'Anyone else watching the game right now?? snooze fest!',
      'username': 'crazyKid',
      'reactions': []
  },
  {
      'thoughtText': 'This man just hit a homerun off of a 75mph curveball!',
      'username': 'cubeBoy',
      'reactions': []
  },
  {
      'thoughtText': 'When is this new movie coming out??',
      'username': 'senselessdan',
      'reactions': []
  },
];

const reaction = [
  {
    'reactionBody': 'it is an ok app',
    'username': 'senselessdan',
   
  },
  {
    'reactionBody': 'whooooo',
    'username': 'cubeBoy',
    
  },
  {
    'reactionBody': 'ready to sleep',
    'username': 'heavenG',
   
  },
  {
    'reactionBody': 'ridiculous!',
    'username': 'crazyKid',
     
  },
  {
    'reactionBody': 'soon I hope',
    'username': 'steevo',
    
  },
];

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    await User.collection.insertMany(user);
    await Thought.collection.insertMany(thought);

    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
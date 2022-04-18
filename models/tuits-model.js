const mongoose = require('mongoose')
// const schema = require('../schemas/tuits-schema')

const schema = mongoose.Schema({
  topic: String,
  posted: {type: Date, defaultValue: Date.now},
  userName: String,
  verified: {type: Boolean, defaultValue: false},
  handle: String,
  title: String,
  liked: {type: Boolean, defaultValue: false},
  tuit: String,
  attachments: {
    image: String
  },
  time: String,
  "logo-image": String,
  "avatar-image": String,
  stats: {
    comments: {type: Number, defaultValue: 0},
    retweets: {type: Number, defaultValue: 0},
    likes: {type: Number, defaultValue: 0},
    dislikes: {type: Number, defaultValue:0}
  }
}, {collection: 'tuitmodels'});



const tuitsModel = mongoose.model('TuitModel', schema);


              
module.exports= tuitsModel;

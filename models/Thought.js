// add  Types object to import ObjectID() value from the _id field
const { Schema, model, Types } = require('mongoose');
// import Moment.js to format the date
const moment = require('moment');
const User = require('./User');

const ReactionSchema = new Schema(
    {
     // add a new customized id, different from its parent Thought _id
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // added getters so date is formatted with Moment method
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      }
    }
    // ,
            // {
            //   toJSON: {
            //     virtuals: true,   // (2) virtuals set to true
            //     getters: true     // moment.js date formatting set to true
            //   }
            // }
  );

const ThoughtSchema = new Schema(
      {
        thoughtText: {
          type: String,
          required: true
        },
        createdAt: {
          type: Date,
          default: Date.now,
           // add getters to format the date through a Moment method
          get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        userName: {         // TODO: how to join with user?
            type: String,
            required: true
          },
        reaction: [reactionSchema],
    );
        // Virtual added, which is separated from grouping
      // this Virtual is for count of friends
      {
        toJSON: {
          virtuals: true,  // (2) virtual set to true
          getters: true   // work with moment.js, date formatter Getter as per above
        },
        id: false
      }   
 );

// (1) virtual definition to add Reaction count
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


// create the Thought model using the Thoughtchema
const Thought = model('Thought', ThoughtSchema);
// export the Thought model
module.exports = Thought;

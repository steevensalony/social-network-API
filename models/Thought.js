const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs')

const thoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dayjs(createdAtVal).format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
      toJSON: {
          virtuals: true,
          getters: true,
      },
      id: false,
  }
)

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

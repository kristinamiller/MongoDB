const Questions = new Schema({
  questionBody: {
    type: String,
    required: true
  },
  wrong: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})
import mongoose from "mongoose";
const { Schema } = mongoose;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  // stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const Person = mongoose.model("Person", personSchema);
export default Person;

import mongoose, { Schema, model } from "mongoose";
import { IStory } from "../../interfaces/IStory";

const storySchema = new Schema<IStory>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    collection: "storyshar_stories",
  }
);

const StoryModel = mongoose.models.Story || model<IStory>("Note", storySchema);

export default StoryModel;

import { DataSource } from "apollo-datasource";
import StoryModel from "../../database/models/storyModel";
import UserModel from "../../database/models/userModel";

class DatabaseAPI extends DataSource {
  constructor() {
    super();
  }

  /* Get all stories from database */
  async getAllStories() {
    return await StoryModel.find();
  }

  /* Get user's stories from database */
  async getUserStories(userId: string) {
    return await StoryModel.find({ userId });
  }

  /* Get one story from database */
  async getOneStory(id: string) {
    return await StoryModel.findById(id);
  }

  /* Create story in database */
  async createStory(userId: string, title: string, body: string) {
    const newStory = new StoryModel({ title, body, userId });
    return await newStory.save();
  }

  /* Delete story from database */
  async deleteStory(id: string) {
    return await StoryModel.findByIdAndRemove(id);
  }

  /* Update story in database */
  async updateStory(id: string, newTitle: string, newBody: string) {
    return await StoryModel.findByIdAndUpdate(
      id,
      {
        title: newTitle,
        body: newBody,
      },
      { new: true }
    );
  }

  /* Check story owner */
  async isStoryOwner(id: string, authUserId: string) {
    try {
      const story = await this.getOneStory(id);

      if (!story) {
        return false;
      }

      return story.userId.toString() === authUserId;
    } catch (err) {
      return false;
    }
  }

  /* Get user by id */
  async getUserById(userId: string) {
    try {
      return await UserModel.findById(userId);
    } catch (err) {
      console.error(err);
      throw Error("Can't find user");
    }
  }
}

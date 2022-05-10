import { IUser } from "./IUser";

/**
 * Note interface used by mongoose model
 */
export interface IStory {
  id: String;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  userId: IUser;
}

/**
 * Note interface used by GraphQL
 */
export interface IGraphNote {
  id: String;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}

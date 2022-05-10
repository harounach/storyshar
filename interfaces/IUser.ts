/**
 * User interface used by mongoose model
 */
export interface IUser {
  id: String;
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * AuthUser interface used by GraphQL mutation operations
 */
export interface IAuthUser {
  id: string;
  displayName: string;
  token: string;
}

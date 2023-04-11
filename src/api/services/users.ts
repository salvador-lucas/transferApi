import { userNotFoundError } from '~api/errors/users';
import { findUserById } from '~api/repositories/users';
import User from '~db/models/Users';

export const getUserById = async (userId: number): Promise<User> => {
  const userById = await findUserById(userId);
  if(!userById)
    throw userNotFoundError();

  return userById;
};

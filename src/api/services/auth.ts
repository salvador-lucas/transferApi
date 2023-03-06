import { authenticationFailError, userEmailExistError } from '~api/errors/authentication';
import { SECRET_KEY } from '~api/middlewares/checkjwt';
import { ErrnoException } from '~api/models/error';
import { LoginUser } from '~api/models/users';
import { findUserByUsermail, storeUser } from '~api/repositories/users';
import { databaseErrorHandler } from '~db/error_handler';
import { DB_ERRORS } from '~db/errors';
import { sign } from 'jsonwebtoken';
import User from '~db/models/Users';

export const userSignup = async (user: User): Promise<void> => {
  try {
    await storeUser(user);
  } catch (e) {
    const err = e as ErrnoException;
    if (err.parent.code === DB_ERRORS.DUPLICATE_KEY) {
      throw userEmailExistError();
    }
    databaseErrorHandler(e as ErrnoException);
  }
};

export const login = async (user: User): Promise<LoginUser> => {
  const foundUser = await findUserByUsermail(user).catch(databaseErrorHandler);
  if (!foundUser) {
    throw authenticationFailError();
  }

  const isMatch = foundUser?.validPassword(user.password);

  if (isMatch) {
    const token = sign({ userId: foundUser.id, username: foundUser.email }, SECRET_KEY, {
      expiresIn: '24h'
    });

    const loggedUser: LoginUser = {
      token
    };

    return loggedUser;
  } else {
    throw authenticationFailError();
  }
};

import User from '~db/models/Users';

export const storeUser = async (user: User): Promise<void> => {
  console.info('saving user in database');
  await User.create(user);
  console.info('finished saving user in database');
  return;
};

export const findUserByUsermail = async (user: User): Promise<User | null> => {
  console.info('finding user in database');
  const dbUser = await User.findOne({ where: { email: user.email } });
  console.info('finished finding user in database');
  return dbUser;
};

export const getUsers = async (): Promise<User[]> => {
  console.info('getting user from database');
  const users = await User.findAll();
  console.info('finished getting user from database');
  return users;
};

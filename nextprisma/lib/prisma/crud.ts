import { prisma } from './prisma';

export const createUser = async fields => {
  console.log(fields, prisma.user);
  let newUser = await prisma.user.create({ data: fields });
  if (!newUser) return null;
  return newUser;
};

export const deleteUser = async email => {
  let deletedUser = await prisma.user.delete({ where: { email } });
  if (!deletedUser) return null;
  return deletedUser;
};

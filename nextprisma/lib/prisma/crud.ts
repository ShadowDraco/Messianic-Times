import wait from '../wait';
import prisma from './prisma';
import { randomUUID } from 'crypto';

export const createUser = async fields => {
  let newUser = await prisma.user.create({
    data: {
      email: fields.email,
      name: fields.name,
      password: fields.password,
    },
  });
  if (!newUser) return null;
  return newUser;
};

export const findUser = async (email, ms) => {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com',
    },
  });

  if (ms) await wait(ms);

  return user;
};

export const createToken = async userId => {
  let token = prisma.activateToken.create({
    data: {
      token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
      userId,
    },
  });
  if (!token) return null;
  return token;
};

export const deleteUser = async email => {
  let deletedUser = await prisma.user.delete({ where: { email } });
  if (!deletedUser) return null;
  return deletedUser;
};

export const deleteUserCascade = async email => {
  let deletedUser = await prisma.user.delete({ where: email });
};

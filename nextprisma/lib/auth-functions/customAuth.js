import bcrypt from 'bcrypt';
import prisma  from '../../lib/prisma/prisma';

export const authorizeUser = async credentials => {
  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (!user) {
    return null; // say no error, just user mistake
  }

  if (!user.activated) {
    throw new Error('User is not active');
  }

  const isPasswordValid = await bcrypt.compare(
    credentials.password,
    user.password
  );

  if (!isPasswordValid) {
    return null;
  }

  return {
    id: user.id + '',
    email: user.email,
    name: user.name,
  };
};

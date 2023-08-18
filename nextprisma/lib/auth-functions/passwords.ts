import bcrypt from 'bcrypt';

export const hashPassword = password => {
  const saltRounds = 3;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  if (!hash) return null;
  return hash;
};

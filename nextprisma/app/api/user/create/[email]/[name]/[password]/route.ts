import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../../../../auth/[...nextauth]/route';
import { createToken, createUser } from '../../../../../../../lib/prisma/crud';
import { hashPassword } from '../../../../../../../lib/auth-functions/passwords';

import sendVerificationEmail from '../../../../../../../lib/mailgun/sendVerificationEmail';
export async function POST(request) {
  //const session = await getServerSession(authOptions);

  /*if (!session) {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 401, statusText: 'unauthorized'
    });
  }*/

  const cutUrl = request.url.split('create')[1].split('/');
  const hashedPassword = await hashPassword(cutUrl[3]);

  const newUser = {
    email: cutUrl[1],
    name: cutUrl[2],
    password: hashedPassword,
  };
  let createdUser;
  let createdToken;
  try {
    createdUser = await createUser(newUser);
    createdToken = await createToken(createdUser.id);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: 'user could not be created',
        success: 'failed',
      }),
      {
        status: 400,
        statusText: error?.meta?.cause
          ? error.meta.cause
          : 'user could not be created',
      }
    );
  }

  try {
    await sendVerificationEmail(createdUser, createdToken);
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        error:
          'verification email could not be sent, please contact the owner to have this fixed',
        success: 'email failed',
      }),
      {
        status: 500,
        statusText: error.message
          ? error.message
          : 'The verification email could not be sent.',
      }
    );
  }

  return NextResponse.json(
    { success: 'success!', message: 'User created, email sent' },
    { status: 200, statusText: 'success!' }
  );
}

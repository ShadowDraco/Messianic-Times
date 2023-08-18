import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../../../../auth/[...nextauth]/route';
import { createUser } from '../../../../../../../lib/prisma/crud';
import { hashPassword } from '../../../../../../../lib/auth-functions/passwords';

export async function POST(request) {
  const session = await getServerSession(authOptions);

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

  console.log(newUser);
  try {
    let created = await createUser(newUser);
    console.log(created);
  } catch (error) {
    console.log(error.meta);

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

  return NextResponse.json(
    { success: 'success!', message: 'User created' },
    { status: 200, statusText: 'success!' }
  );
}

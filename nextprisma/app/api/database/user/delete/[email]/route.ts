import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../../../auth/[...nextauth]/route';
import { deleteUser } from '../../../../../../lib/prisma/crud';

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 403,
      statusText: 'unauthorized',
    });
  }
  const email = request.url.split('delete/')[1];

  try {
    let deleted = await deleteUser(email);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'user could not be deleted', success: 'failed' }),
      {
        status: 400,
        statusText: error?.meta?.cause
          ? error.meta.cause
          : 'that user could not be deleted',
      }
    );
  }

  return NextResponse.json(
    { success: 'success!', message: 'User deleted' },
    { status: 200, statusText: 'success!' }
  );
}

import { prisma } from '../../../../lib/prisma/prisma';
import { NextResponse } from 'next/server';
export async function GET(request, params) {
  const token = params.params.token;

  const user = await prisma.user.findFirst({
    where: {
      ActivateToken: {
        some: {
          AND: [
            {
              activatedAt: null,
            },
            {
              createdAt: {
                gt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
              },
            },
            {
              token,
            },
          ],
        },
      },
    },
  });

  if (!user) {
    throw new Error('Invalid token');
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      activated: true,
    },
  });

  await prisma.activateToken.update({
    where: {
      token: token,
    },
    data: {
      activatedAt: new Date(),
    },
  });

  return NextResponse.redirect('/products');
}

import { prisma } from '../lib/prisma/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Link from 'next/link';
import BasicDeleteUserForm from '../components/BasicDeleteUserForm';
import BasicCreateUserForm from '../components/BasicCreateUserForm';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com',
    },
  });

  return (
    <main>
      Hello {user?.name}
      <pre>{JSON.stringify(session)}</pre>
      <Link href='/api/auth/signin'>signin</Link>
      <br></br>
      <br></br>
      <BasicDeleteUserForm />
      <br></br>
      <br></br>
      <BasicCreateUserForm />
    </main>
  );
}

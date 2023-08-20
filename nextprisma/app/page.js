import { prisma } from '../lib/prisma/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import AuthButtons from '../components/AuthButtons';
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
      <br></br>
      <AuthButtons />
      <br></br>
      <BasicDeleteUserForm />
      <br></br>
      <br></br>
      <BasicCreateUserForm />
      <br></br>
      <a href='/products'>
        <button>Products</button>
      </a>
    </main>
  );
}
